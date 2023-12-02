import isEmail from "validator/lib/isEmail";

const PASSWORD_REGEXP = /^.{4,64}$/;
const USERNAME_REGEXP = /^(?!\s)[\S\s].{2,49}(?<!\s)$/;

export function validateUsername(username: string) {
	const isValid = USERNAME_REGEXP.test(username);
	return isValid;
}

export function validatePassword(passwd: string) {
	const isValid = PASSWORD_REGEXP.test(passwd);
	return isValid;
}

export function validateEmail(email: string) {
	const isValid = isEmail(email);
	return isValid;
}
