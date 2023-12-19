import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
	isLoggedIn: false,
	sessionToken: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setSessionToken: (state, { payload }: { payload: string }) => ({
			...state,
			sessionToken: payload,
		}),
	},
});

export const { setSessionToken } = userSlice.actions;

export default userSlice.reducer;
