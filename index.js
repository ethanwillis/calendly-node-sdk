var rp = require('request-promise');

export default class Calendly {
	constructor(api_key) {
		this.api_key = api_key
		this.rp_options = {
			headers: {
				"X-TOKEN": this.api_key
				"User-Agent": "node-calendly-sdk"
			},
			json: true
		}
		
		// Webhook functions.
		this.webhooks = {
			create: function(url, events) {
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
			get: function(id) {
				let function_options = this.rp_options;
				function_options.uri = "https://calendly.com/api/v1/hooks/" + id;

				rp(function_options)
					.then(function(result) {
						return result;
					})
			},
			list: function() {
				let function_options = this.rp_options;
				function_options.uri = "https://calendly.com/api/v1/hooks";
				rp(function_options)
					.then(function(result) {
						return result;
					})
			},
			remove: function(id) {
				let function_options = this.rp_options;
				function_options.uri = "https://calendly.com/api/v1/hooks/" + id;
				rp(function_options)
					.then(function(result) {
						return result;
					})
			}
		}

		// Event Resource Functions
		this.events = {
			list: function(do_check_owner) {
				let function_options = this.rp_options;
				function_options.uri = "https://calendly.com/api/v1/users/me/event_types"
				if(do_check_owner) {
					function_options.uri += "?include=owner";
				}
				rp(function_options)
					.then(function(result) {
						return result;
					})
			}
		}

		// User Resource Functions
		this.users = {
			about_me: function() {
				let function_options = this.rp_options;
				function_options.uri = "https://calendly.com/api/v1/users/me"
				rp(function_options)
					.then(function(result) {
						return result;
					})
			}
		}
	}
}
