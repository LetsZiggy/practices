import { inject } from "aurelia-framework"
import { json, HttpClient } from "aurelia-fetch-client"

@inject(HttpClient)
export class HTTP {
	constructor (HttpClient) {
		HttpClient.configure((config) => {
			config
				.withBaseUrl("api/")
				// .useStandardConfiguration()
				.withDefaults({
					mode: "same-origin", // cors | same-origin
					credentials: "same-origin", // same-origin | include
					headers: {
						"Accept": "application/json",
						"X-Requested-With": "Fetch",
					},
				})
				/*
				.withInterceptor({
					request (request) {
						return request
					},
					requestError (error) {
						let headers = {}

						for (let entry of error.headers.entries()) {
							headers[entry[0]] = entry[1]
						}

						console.log("requestError", error)
						console.log("requestErrorHeaders", headers)
					},
					response (response) {
						return response
					},
					responseError (error) {
						let headers = {}

						for (let entry of error.headers.entries()) {
							headers[entry[0]] = entry[1]
						}

						console.log("responseError", error)
						console.log("responseErrorHeaders", headers)
					},
				})
				*/
		})

		this.http = HttpClient
	}

	fetch (resource, init) {
		return (
			this.http
				.fetch(resource, init)
				.then((response) => response.json())
				.then((data) => data)
				.catch((error) => {
					console.log(error)
				})
		)
	}

	get ({ url }) {
		const data = { method: "GET" }

		return this.fetch(url, data)
	}

	post ({ url, obj = null }) {
		const data = { method: "POST" }

		if (obj) {
			data.headers = { "Content-Type": "application/json" }
			data.body = json(obj)
		}

		return this.fetch(url, data)
	}

	put ({ url, obj = null }) {
		const data = { method: "PUT" }

		if (obj) {
			data.headers = { "Content-Type": "application/json" }
			data.body = json(obj)
		}

		return this.fetch(url, data)
	}

	patch ({ url, obj = null }) {
		const data = { method: "PATCH" }

		if (obj) {
			data.headers = { "Content-Type": "application/json" }
			data.body = json(obj)
		}

		return this.fetch(url, data)
	}

	delete ({ url, obj = null }) {
		const data = { method: "DELETE" }

		if (obj) {
			data.headers = { "Content-Type": "application/json" }
			data.body = json(obj)
		}

		return this.fetch(url, data)
	}
}
