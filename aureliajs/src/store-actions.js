import { nextStateHistory } from "aurelia-store"

// https://aurelia.io/docs/plugins/store#making-our-app-history-aware
// https://github.com/zewa666/aurelia-store-examples/blob/master/markdown/src/actions.ts
const actions = {
	toggleIsSignin: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isSignin: data,
		})
	},
	toggleUsernameValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isUsernameValid: data,
		})
	},
	toggleEmailValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isEmailValid: data,
		})
	},
	togglePasswordValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isPasswordValid: data,
		})
	},
	togglePasswordConfirmationValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isConfirmValid: data,
		})
	},
	setUsername: (state, data = "") => {
		return nextStateHistory(state, {
			...state.present,
			username: data,
		})
	},
	setUserId: (state, data = 0) => {
		return nextStateHistory(state, {
			...state.present,
			userId: data,
		})
	},
	setJobs: (state, { data = [], type = "full" }) => {
		let jobs = null

		if (type === "full") {
			jobs = [ ...data ]
		}
		else {
			const currentJobs = [ ...state.present.jobs ]
			const newJobs = []

			for (let i = (data.length - 1); i >= 0; i--) {
				let found = false

				for (let j = (currentJobs.length - 1); j >= 0; j--) {
					if (currentJobs[j].id === data[i].id) {
						found = true
						currentJobs[j] = { ...data[i] }
						break
					}
				}

				if (!found) {
					newJobs.push(data[i])
				}
			}

			jobs = [ ...currentJobs, ...newJobs ]
		}

		return nextStateHistory(state, {
			...state.present,
			jobs: jobs,
		})
	},
	setJobsLastUpdate: (state) => {
		return nextStateHistory(state, {
			...state.present,
			jobsLastUpdate: Date.now(),
		})
	},
	updateJob: (state, data = { id: 0 }) => {
		const jobs = [ ...state.present.jobs ]
		const index = jobs
			.reduce((acc, value, index) => {
				return ((value.id === data.id) ? index : acc)
			}, -1)

		if (index === -1) {
			return nextStateHistory(state, {
				...state.present,
			})
		}

		jobs[index] = { ...jobs[index], ...data }

		return nextStateHistory(state, {
			...state.present,
			jobs: jobs,
		})
	},
	deleteJob: (state, data = { id: 0 }) => {
		const jobs = [ ...state.present.jobs ]
		const index = jobs
			.reduce((acc, value, index) => {
				return ((value.id === data.id) ? index : acc)
			}, -1)

		if (index === -1) {
			return nextStateHistory(state, {
				...state.present,
			})
		}

		jobs.splice(index, 1)

		return nextStateHistory(state, {
			...state.present,
			jobs: jobs,
		})
	},
	toggleJobTitleValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isJobTitleValid: data,
		})
	},
	toggleJobLinkValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isJobLinkValid: data,
		})
	},
	toggleJobDescriptionValid: (state, data = false) => {
		return nextStateHistory(state, {
			...state.present,
			isJobDescriptionValid: data,
		})
	},
	// action: (state, data) => {
	// 	return nextStateHistory(state, {
	// 		...state.present,
	// 	})
	// },
}

const getAction = (keyArray, action = actions) => {
	const maxIndex = keyArray.length - 1

	action = (maxIndex !== 0)
		? getAction(keyArray.slice(1), action[keyArray[0]])
		: action[keyArray[0]]

	return action
}

// store.registerAction(name, action)
export const registerActions = (store, list) => {
	list
		.map(({ name, key }) => {
			const action = (typeof key === "string")
				? getAction(key.split("."))
				: key

			return ({
				name: name,
				action: action,
			})
		})
		.forEach(({ name, action }) => {
			store.registerAction(name, action)
		})
}

// store.unregisterAction(action)
export const unregisterActions = (store, list) => {
	list
		.map(({ key }) => {
			const action = (typeof key === "string")
				? getAction(key.split("."))
				: key

			return ({
				action: action,
			})
		})
		.forEach(({ action }) => {
			store.unregisterAction(action)
		})
}
