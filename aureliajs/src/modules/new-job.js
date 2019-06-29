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
		isJobTitleValid: (store) => store.state.pipe(
			pluck("present", "isJobTitleValid"),
			distinctUntilChanged(),
		),
		isJobLinkValid: (store) => store.state.pipe(
			pluck("present", "isJobLinkValid"),
			distinctUntilChanged(),
		),
		isJobDescriptionValid: (store) => store.state.pipe(
			pluck("present", "isJobDescriptionValid"),
			distinctUntilChanged(),
		),
		identifier: (store) => store.state.pipe(
			pluck("present", "identifier"),
			distinctUntilChanged(),
		),
		token: (store) => store.state.pipe(
			pluck("present", "token"),
			distinctUntilChanged(),
		),
	},
})
@inject(Router, EventAggregator, Store, HTTP)
export class NewJob {
	propertyChanged (stateName, newState, oldState) {
		setTimeout(() => {
			if (this.isJobTitleValid && this.isJobLinkValid && this.isJobDescriptionValid) {
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
			{ name: "setToken", key: "setToken" },
			{ name: "toggleJobTitleValid", key: "toggleJobTitleValid" },
			{ name: "toggleJobDescriptionValid", key: "toggleJobDescriptionValid" },
			{ name: "toggleJobLinkValid", key: "toggleJobLinkValid" },
		])
	}

	async canActivate (params, routeConfig, navigationInstruction) {
		if (this.router.isNavigatingFirst || this.router.isNavigatingRefresh) {
			await componentStateInit(this.store)
			await componentSignInInit(this.store, this.http, this.identifier)
		}

		if (!this.isSignin) {
			return false
		}

		return true
	}

	canDeactivate () {
		unregisterActions(this.store, [
			{ key: "setToken" },
			{ key: "toggleJobTitleValid" },
			{ key: "toggleJobDescriptionValid" },
			{ key: "toggleJobLinkValid" },
		])

		return true
	}

	async submit (event) {
		event.preventDefault()

		const data = {
			token: this.token,
		}

		const formData = new FormData(document.getElementById("new-job"))

		for (const entry of formData.entries()) {
			data[entry[0]] = entry[1]
		}

		const response = await this.http
			.post({ url: "jobs/new-job", obj: data }) || DEFAULT_RESPONSE_OBJECT

		if (response && response.success) {
			this.router.navigateToRoute("jobs")
		}
		else {
			if (response && Array.isArray(response.errors)) {
				response.errors.forEach((value) => this.ea.publish(value))
			}
			else {
				const error = document.getElementById("submit-error")
				error.innerText = response.errors
				error.classList.remove("invisible")

				setTimeout(() => {
					error.classList.add("invisible")
					error.innerText = ""
					this.router.navigateToRoute("jobs")
				}, 7500)
			}
		}

		return false
	}
}
