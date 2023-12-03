export const PLACEHOLDER_ACCOUNTS = [
	{ userName: "user1", password: "password1" },
	{ userName: "user2", password: "password2" },
	{ userName: "user3", password: "password3" },
	{ userName: "user4", password: "password4" },
	{ userName: "user5", password: "password5" },
	{ userName: "user6", password: "password6" },
	{ userName: "user7", password: "password7" },
	{ userName: "user8", password: "password8" },
	{ userName: "user9", password: "password9" },
	{ userName: "user10", password: "password10" },
];

export const { logIn: LOGINFORM_MSGs, singUp: SIGNUPFORM_MSGs } = {
	logIn: {
		head: "Log In",
		msg: "By continuing you agree to ToS and Privacy Policy.",
	},
	singUp: [
		// first step
		{
			head: "Sign Up",
			msg: "By continuing you agree to ToS and Privacy Policy.",
		},
		// second step
		{
			head: "Create your username and password",
			msg: "You can't change your username later.",
		},
	],
};
