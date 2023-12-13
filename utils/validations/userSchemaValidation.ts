// validates data on the client side
import { validateEmail, validateUsername } from "./helpers";

export default function validateUserSchema(name: string, value: string) {
	switch (name) {
		case "username":
			const isValidUsername = validateUsername(value);
			return isValidUsername;
		case "email":
			const isValidEmail = validateEmail(value);
			return isValidEmail;
		default:
			return false;
	}
}
