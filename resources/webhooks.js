var rp = require('request-promise');
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

		return rp(function_options)
	}

	get(id) {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks/" + id;

		return rp(function_options)
	}

	list() {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks";
		return rp(function_options)
	}

	remove(id) {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/hooks/" + id;
		return rp(function_options)
	}
}
