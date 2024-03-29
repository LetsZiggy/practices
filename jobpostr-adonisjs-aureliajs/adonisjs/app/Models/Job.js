"use strict"

/** @type {typeof import("@adonisjs/lucid/src/Lucid/Model")} */
const Model = use("Model")

class Job extends Model {
	/**
	 * A belongsTo relationship with User.
	 *
	 * @method user
	 *
	 * @return {Object}
	 */
	user () {
		return this.belongsTo("App/Models/User")
	}
}

module.exports = Job
