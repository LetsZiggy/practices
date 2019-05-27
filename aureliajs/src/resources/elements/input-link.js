import { inject, bindable } from "aurelia-framework"
import { EventAggregator } from "aurelia-event-aggregator"
import { dispatchify } from "aurelia-store"
import { ValidationRules } from "aurelia-validation"

import { Validation } from "validation"

@inject(EventAggregator, Validation)
export class InputLink {
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
		dispatchify("toggleJobLinkValid")()
		const error = document.getElementById(`${ this.elemId }-error`)
		this.rules = ValidationRules
			.ensure((obj) => obj.input)
			.displayName(this.elemId.toUpperCase())
			.required()
				.withMessageKey("required")
			.maxLength(254)
				.withMessageKey("maxLength")
			.satisfies((value) => /^http(?:s)?:\/\//gi.test(value))
				.withMessage(`needs to start with "http://" or "https://"`)
			.satisfies((value) => /^http(?:s)?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost)\b([-a-zA-Z0-9@:%_+.~#?//=]*)$/gi.test(value))
				.withMessageKey("url")
			.rules

		this.validationCallback = (validation) => {
			dispatchify("toggleJobLinkValid")(validation.valid)

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

		this.subscription.push(this.ea.subscribe(`recheckJobLink`, () => {
			this.vc.validate({ object: this, rules: this.rules }, this.validationCallback)
		}))
	}

	detached () {
		this.subscription.forEach((subscribe) => subscribe.dispose())
		while (this.subscription.length) { this.subscription.pop() }
	}
}
