module.exports = class Users {
	constructor(options) {
		this.rp_options = options;
	}


	about_me() {
		let function_options = this.rp_options;
		function_options.uri = "https://calendly.com/api/v1/users/me"
		rp(function_options)
			.then(function(result) {
				return result;
			})
	}
}			




