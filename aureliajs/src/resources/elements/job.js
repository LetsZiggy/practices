import { inject, bindable } from "aurelia-framework"
import { connectTo } from "aurelia-store"
import { pluck, distinctUntilChanged } from "rxjs/operators"

import { HTTP } from "http"

// https://rxjs-dev.firebaseapp.com/api/operators/pluck
// https://www.learnrxjs.io/operators/transformation/pluck.html
@connectTo({
	selector: {
		userId: (store) => store.state.pipe(
			pluck("present", "userId"),
			distinctUntilChanged(),
		),
	},
})
@inject(HTTP)
export class Job {
	@bindable()
	job

	@bindable()
	index

	constructor (HTTP) {
		this.http = HTTP
		this.url = ""
	}

	attached () {
		setTimeout(async () => {
			const url = "https://source.unsplash.com/random/150x150"
			this.url = await fetch(url, { mode: "cors" })
				.then((response) => response.url)
		}, this.index * 25)
	}
}
