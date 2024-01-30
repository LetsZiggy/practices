"use strict"

/** @type {import("@adonisjs/lucid/src/Schema")} */
const Schema = use("Schema")

class TokensSchema extends Schema {
	up () {
		this.create("tokens", (table) => {
			table
				.increments()

			table
				.timestamps()

			table
				.string("identifier", 255)
				.notNullable()
				.unique()

			table
				.string("token", 255)
				.notNullable()
				.unique()

			table
				.boolean("anonymous")
				.defaultTo(true)
		})
	}

	down () {
		this.drop("tokens")
	}
}

module.exports = TokensSchema
