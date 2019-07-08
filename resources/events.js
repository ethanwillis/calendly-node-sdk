module.exports = class Events {
	constructor(options) {
		this.rp_options = options;
	}

	list(do_check_owner) {
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
