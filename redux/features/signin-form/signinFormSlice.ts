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
		updateRegisterData: (
			state,
			{ payload: { id, value } }: { payload: FormPayload }
		) => ({
			...state,
			registerForm: {
				...state.registerForm,
				[id]: value,
			},
		}),
		clearAllData: () => ({
			...initialState,
		}),
	},
});

export const { updateLogInData, updateRegisterData, clearAllData } =
	signInFormSlice.actions;

export default signInFormSlice.reducer;
