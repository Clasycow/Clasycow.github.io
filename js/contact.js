$.validator.addMethod("mailcheck", function (a) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a);
});
$("#form_val").validate({
	rules: {
		email: {
			required: true,
			mailcheck: true
		},
		name: {
			required: true
		},
		subject: {
			required: true
		},
		message: {
			required: true
		}
	},
	messages: {
		email: {
			required: "Please enter a email address",
			email: "Please enter a valid email address"
		},
		name: {
			required: "Please enter your name"
		},
		subject: {
			required: "Please enter a subject",
		},
		message: {
			required: "Please enter a message"
		}
	}

});