import { inject, bindable, observable } from "aurelia-framework"
import { EventAggregator } from "aurelia-event-aggregator"
import { dispatchify } from "aurelia-store"
import { ValidationRules } from "aurelia-validation"

import { Validation } from "validation"

@inject(EventAggregator, Validation)
export class InputUsername {
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
		dispatchify("setUsername")()
		dispatchify("toggleUsernameValid")()
		const error = document.getElementById(`${ this.elemId }-error`)
		this.rules = ValidationRules
			.ensure((obj) => obj.input)
			.displayName(this.elemId.toUpperCase())
			.required()
				.withMessageKey("required")
			.minLength(4)
				.withMessageKey("minLength")
			.maxLength(80)
				.withMessageKey("maxLength")
			.satisfies((value) => /^(?!.*[^A-Za-z0-9-\._])[A-Za-z0-9-\._]*$/g.test(value))
				.withMessage("can only have these symbols: - . _")
			.rules

		this.validationCallback = (validation) => {
			dispatchify("toggleUsernameValid")(validation.valid)

			if (validation.valid) {
				error.innerText = ""
				error.classList.add("hidden")
				dispatchify("setUsername")(this.input)
			}
			else {
				const validationError = validation.results.find((result) => !result.valid)
				error.innerText = validationError.message
				error.classList.remove("hidden")
			}
		}

		this.subscription.push(this.ea.subscribe("recheckUsername", () => {
			this.vc.validate({ object: this, rules: this.rules }, this.validationCallback)
		}))

		this.subscription.push(this.ea.subscribe("notUniqueUsername", () => {
			dispatchify("setUsername")()
			dispatchify("toggleUsernameValid")()
			error.innerText = "has already been taken"
			error.classList.remove("hidden")

			setTimeout(() => {
				error.innerText = ""
				error.classList.add("hidden")
			}, 7500)
		}))

		setTimeout(() => document.getElementById(this.elemId).focus(), 200)
	}

	detached () {
		this.subscription.forEach((subscribe) => subscribe.dispose())
		while (this.subscription.length) { this.subscription.pop() }
	}
}
