"use strict"

const { rule } = require("indicative")

class Delete {
	get validateAll () {
		return true
	}

	get sanitizationRules () {
		return {
			id: [
				rule("toInt"),
			],
			user_id: [
				rule("toInt"),
			],
		}
	}

	get rules () {
		return {
			id: [
				rule("required"),
			],
			user_id: [
				rule("required"),
			],
		}
	}

	get messages () {
		return {
			// "Id is required"
			"id.required": "recheckId",
			// "User_id is required"
			"user_id.required": "recheckUser_id",
		}
	}

	async fails (errors) {
		const messages = errors
			.map((value) => value.message)
			.filter((value, index, array) => array.indexOf(value) === index)

		const data = {
			success: false,
			errors: messages,
		}

		return this.ctx.response.send(data)
	}
}

module.exports = Delete
