"use strict"

/** @type {import("@adonisjs/lucid/src/Schema")} */
const Schema = use("Schema")

class JobsSchema extends Schema {
	up () {
		this.create("jobs", (table) => {
			table
				.increments()

			table
				.timestamps()

			table
				.integer("user_id")
				.unsigned()
				.references("id")
				.inTable("users")

			table
				.string("title", 60)
				.notNullable()

			table
				.string("link", 254)

			table
				.string("description", 120)
		})
	}

	down () {
		this.drop("jobs")
	}
}

module.exports = JobsSchema
