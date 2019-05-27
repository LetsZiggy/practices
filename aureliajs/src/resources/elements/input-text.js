import { inject, bindable } from "aurelia-framework"
import { EventAggregator } from "aurelia-event-aggregator"
import { dispatchify } from "aurelia-store"
import { ValidationRules } from "aurelia-validation"

import { Validation } from "validation"

@inject(EventAggregator, Validation)
export class InputText {
	@bindable()
	elemId

	@bindable()
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
		const actionId = (this.elemId === "title")
			? "Title"
			: "Description"

		dispatchify(`toggleJob${ actionId }Valid`)()
		const error = document.getElementById(`${ this.elemId }-error`)
		const maxLength = (this.elemId === "title")
			? 60
			: 120

		this.rules = ValidationRules
			.ensure((obj) => obj.input)
			.displayName(this.elemId.toUpperCase())
			.required()
				.withMessageKey("required")
			.minLength(8)
				.withMessageKey("minLength")
			.maxLength(maxLength)
				.withMessageKey("maxLength")
			.satisfies((value) => /^(?!.*[^A-Za-z0-9-\._@:;/#\s])[A-Za-z0-9-\._@:;/#\s]*$/g.test(value))
				.withMessage("can only have these symbols: - . _ @ : ; / #")
			.rules

		this.validationCallback = (validation) => {
			dispatchify(`toggleJob${ actionId }Valid`)(validation.valid)

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

		this.subscription.push(this.ea.subscribe(`recheckJob${ actionId }`, () => {
			this.vc.validate({ object: this, rules: this.rules }, this.validationCallback)
		}))

		if (this.elemId === "title") {
			setTimeout(() => document.getElementById(this.elemId).focus(), 200)
		}
	}

	detached () {
		this.subscription.forEach((subscribe) => subscribe.dispose())
		while (this.subscription.length) { this.subscription.pop() }
	}
}
