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
	reducers: {
		updateLogInData: (
			state,
			{ payload: { id, value } }: { payload: FormPayload }
		) => ({
			...state,
			logInForm: {
				...state.logInForm,
				[id]: value,
			},
		}),
	},
});

export const { updateLogInData } = signInFormSlice.actions;

export default signInFormSlice.reducer;
