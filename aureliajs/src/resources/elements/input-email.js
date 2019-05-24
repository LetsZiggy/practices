import { inject, bindable, observable } from "aurelia-framework"
import { EventAggregator } from "aurelia-event-aggregator"
import { dispatchify } from "aurelia-store"
import { ValidationRules } from "aurelia-validation"

import { Validation } from "validation"

@inject(EventAggregator, Validation)
export class InputEmail {
	@bindable()
	elemId

	@observable()
	input

	inputChanged (newState, oldState) {
		setTimeout(() => {
			this.vc.validate({ object: this, rules: this.rules }, this.validationCallback)
		}, 0)
	}

	constructor (EventAggregator, Validation) {
		this.ea = EventAggregator
		this.vc = Validation
		this.subscription = []
	}

	attached () {
		dispatchify("toggleEmailValid")()
		const error = document.getElementById(`${ this.elemId }-error`)
		this.rules = ValidationRules
			.ensure((obj) => obj.input)
			.displayName(this.elemId.toUpperCase())
			.required()
				.withMessageKey("required")
			.maxLength(254)
				.withMessageKey("maxLength")
			.satisfies((value) => /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+)*$/.test(value))
				.withMessageKey("email")
			.rules

		this.validationCallback = (validation) => {
			dispatchify("toggleEmailValid")(validation.valid)

			if (validation.valid) {
				error.innerText = ""
				error.classList.add("hidden")
			}
			else {
				const validationError = validation.results.find((result) => !result.valid)
				error.innerText = validationError.message
				error.classList.remove("hidden")
			}
		}

		this.subscription.push(this.ea.subscribe("recheckEmail", () => {
			this.vc.validate({ object: this, rules: this.rules }, this.validationCallback)
		}))

		this.subscription.push(this.ea.subscribe("notUniqueEmail", () => {
			dispatchify("toggleEmailValid")()
			error.innerText = "has already been registered"
			error.classList.remove("hidden")

			setTimeout(() => {
				error.innerText = ""
				error.classList.add("hidden")
			}, 7500)
		}))
	}

	detached () {
		this.subscription.forEach((subscribe) => subscribe.dispose())
		while (this.subscription.length) { this.subscription.pop() }
	}
}
