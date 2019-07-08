var Webhooks = require('./resources/webhooks.js');
var Events = require('./resources/events.js');
var Users = require('./resources/users.js');

module.exports = class Calendly {
	constructor(api_key) {
		this.api_key = api_key
		this.rp_options = {
			headers: {
				"X-TOKEN": this.api_key,
				"User-Agent": "node-calendly-sdk"
			},
			json: true
		}

		// Create resources;
		this.webhooks = new Webhooks(this.rp_options);
		this.events = new Events(this.rp_options);
		this.users = new Users(this.rp_options);
	}
}
