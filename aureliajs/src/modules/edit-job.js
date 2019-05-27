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
		userId: (store) => store.state.pipe(
			pluck("present", "userId"),
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
		jobs: (store) => store.state.pipe(
			pluck("present", "jobs"),
			distinctUntilChanged(),
		),
	},
})
@inject(Router, EventAggregator, Store, HTTP)
export class EditJob {
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
			{ name: "updateJob", key: "updateJob" },
			{ name: "deleteJob", key: "deleteJob" },
			{ name: "toggleJobTitleValid", key: "toggleJobTitleValid" },
			{ name: "toggleJobDescriptionValid", key: "toggleJobDescriptionValid" },
			{ name: "toggleJobLinkValid", key: "toggleJobLinkValid" },
		])
	}

	async canActivate (params, routeConfig, navigationInstruction) {
		if (this.router.isNavigatingFirst || this.router.isNavigatingRefresh) {
			await componentStateInit(this.store)

			if (!this.jobs.length) {
				return false
			}

			await componentSignInInit(this.store, this.http)
		}

		this.job = this.jobs
			.filter((value) => value.id === Number(params.id))[0]

		if (!this.isSignin || (this.job.user_id !== this.userId)) {
			return false
		}

		return true
	}

	canDeactivate () {
		unregisterActions(this.store, [
			{ key: "updateJob" },
			{ key: "deleteJob" },
			{ key: "toggleJobTitleValid" },
			{ key: "toggleJobDescriptionValid" },
			{ key: "toggleJobLinkValid" },
		])

		return true
	}

	async submit (event) {
		event.preventDefault()

		const data = {
			id: this.job.id,
			user_id: this.userId,
		}

		const formData = new FormData(document.getElementById("edit-job"))

		for (const entry of formData.entries()) {
			data[entry[0]] = entry[1]
		}

		const response = await this.http
			.post({ url: "jobs/edit-job", obj: data }) || DEFAULT_RESPONSE_OBJECT

		if (response && response.success) {
			await this.store.dispatch("updateJob", data)
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

	async delete () {
		const data = {
			id: this.job.id,
			user_id: this.userId,
		}

		const response = await this.http
			.post({ url: "jobs/delete-job", obj: data }) || DEFAULT_RESPONSE_OBJECT

		if (response && response.success) {
			await this.store.dispatch("deleteJob", data)
			this.router.navigateToRoute("jobs")
		}
		else {
			const error = document.getElementById("submit-error")

			if (response && Array.isArray(response.errors)) {
				error.innerText = "We're experiencing server issues. Please try again later."
			}
			else {
				error.innerText = response.errors
			}

			error.classList.remove("invisible")

			setTimeout(() => {
				error.classList.add("invisible")
				error.innerText = ""
				this.router.navigateToRoute("jobs")
			}, 7500)
		}

		return true
	}
}
