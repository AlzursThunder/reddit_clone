// validates data on the client side
import { validateEmail, validatePassword, validateUsername } from "./helpers";

export function validateLogInData({ password, username }: LogInFormState) {
	if (!password || !username) return false;

	const isValidUsername = validateUsername(username);
	const isValidPassword = validatePassword(password);

	return isValidUsername && isValidPassword;
}

export function validateRegisterData(
	{ email, password, username }: RegisterFormState,
	step: number
) {
	switch (step) {
		case 0:
			if (!email) return false;
			const isValidEmail = validateEmail(email);
			return isValidEmail;
		case 1:
			if (!username || !password) return false;

			const isValidUsername = validateUsername(username);
			const isValidPassword = validatePassword(password);

			return isValidUsername && isValidPassword;
		default:
			return false;
	}
}
