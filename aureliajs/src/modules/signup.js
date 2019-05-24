import { inject } from "aurelia-framework"
import { Router } from "aurelia-router"
import { EventAggregator } from "aurelia-event-aggregator"
import { Store, connectTo } from "aurelia-store"
import { pluck, distinctUntilChanged } from "rxjs/operators"

import { HTTP } from "http"
import { registerActions, unregisterActions } from "store-actions"
import { DEFAULT_RESPONSE_OBJECT, componentStateInit, componentSignInInit } from "./component-service"

// https://rxjs-dev.firebaseapp.com/api/operators/pluck
// https://www.learnrxjs.io/operators/transformation/pluck.html
@connectTo({
	setup: "canActivate",
	selector: {
		isSignin: (store) => store.state.pipe(
			pluck("present", "isSignin"),
			distinctUntilChanged(),
		),
		isUsernameValid: (store) => store.state.pipe(
			pluck("present", "isUsernameValid"),
			distinctUntilChanged(),
		),
		isEmailValid: (store) => store.state.pipe(
			pluck("present", "isEmailValid"),
			distinctUntilChanged(),
		),
		isPasswordValid: (store) => store.state.pipe(
			pluck("present", "isPasswordValid"),
			distinctUntilChanged(),
		),
		isConfirmValid: (store) => store.state.pipe(
			pluck("present", "isConfirmValid"),
			distinctUntilChanged(),
		),
	},
})
@inject(Router, EventAggregator, Store, HTTP)
export class Signup {
	propertyChanged (stateName, newState, oldState) {
		setTimeout(() => {
			if (this.isUsernameValid && this.isEmailValid && this.isPasswordValid && this.isConfirmValid) {
				this.isDisabled = false
			}
			else {
				this.isDisabled = true
			}
		}, 0)
	}

	constructor (Router, EventAggregator, Store, HTTP) {
		this.router = Router
		this.ea = EventAggregator
		this.store = Store
		this.http = HTTP
		this.isDisabled = true

		registerActions(this.store, [
			{ name: "toggleUsernameValid", key: "toggleUsernameValid" },
			{ name: "toggleEmailValid", key: "toggleEmailValid" },
			{ name: "togglePasswordValid", key: "togglePasswordValid" },
			{ name: "togglePasswordConfirmationValid", key: "togglePasswordConfirmationValid" },
		])
	}

	async canActivate (params, routeConfig, navigationInstruction) {
		if (this.router.isNavigatingFirst || this.router.isNavigatingRefresh) {
			await componentStateInit(this.store)
			await componentSignInInit(this.store, this.http)
		}

		if (this.isSignin) {
			return false
		}

		return true
	}

	canDeactivate () {
		unregisterActions(this.store, [
			{ key: "toggleUsernameValid" },
			{ key: "toggleEmailValid" },
			{ key: "togglePasswordValid" },
			{ key: "togglePasswordConfirmationValid" },
		])

		return true
	}

	async submit (event) {
		event.preventDefault()

		const data = {}
		const formData = new FormData(document.getElementById("signup"))

		for (const entry of formData.entries()) {
			data[entry[0]] = entry[1]
		}

		const response = await this.http
			.post({ url: "users/signup", obj: data }) || DEFAULT_RESPONSE_OBJECT

		if (response && response.success) {
			this.store.dispatch("toggleIsSignin", response.data.isSignin)
			this.store.dispatch("setUserId", response.data.userId)
			this.router.navigateToRoute("jobs")
		}
		else {
			if (response && Array.isArray(response.errors)) {
				response.errors.forEach((value) => this.ea.publish(value))
			}
			else {
				const error = document.getElementById("submit-error")
				error.classList.remove("invisible")

				setTimeout(() => {
					error.classList.add("invisible")
				}, 7500)
			}
		}

		return false
	}
}
