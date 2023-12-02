// validates data on the client side
import { validatePassword, validateUsername } from "./helpers";

export function validateLogInData({ password, username }: LogInFormState) {
	if (!password || !username) return false;

	const isValidUsername = validateUsername(username);
	const isValidPassword = validatePassword(password);

	return isValidUsername && isValidPassword;
}
