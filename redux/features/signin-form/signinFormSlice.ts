import { createSlice } from "@reduxjs/toolkit";

const initialState: SignInFormState = {
	logInForm: { password: "", username: "" },
	registerForm: {
		email: "",
		password: "",
		username: "",
	},
};

const signInFormSlice = createSlice({
	name: "signin-form",
	initialState,
	reducers: {},
});

export default signInFormSlice.reducer;
