module.exports = class Webhooks {
	constructor(options) {
		this.rp_options = options;
	}

	create(url, events) {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks";
		function_options.body = {
			url: url,
			events: events
		}

		rp(function_options)
			.then(function(result) {
				return result;
			})
	},
	get(id) {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks/" + id;

		rp(function_options)
			.then(function(result) {
				return result;
			})
	},
	list() {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks";
		rp(function_options)
			.then(function(result) {
				return result;
			})
	},
	remove(id) {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks/" + id;
		rp(function_options)
			.then(function(result) {
				return result;
			})
	}
}
