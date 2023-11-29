// "@/redux/features/user";
interface UserState {
	userId: string;
}

// "@/redux/features/search-input"
interface SearchInputState {
	searchPhrase: string;
}

// "@/redux/features/signin-form"
interface SignInFormState {
	logInForm: LogInFormState;
	registerForm: RegisterFormState;
}
