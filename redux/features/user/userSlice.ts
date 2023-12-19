import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
	userId: "",
	isLoggedIn: false,
	sessionToken: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserId: (state, { payload }: { payload: string }) => ({
			...state,
			userId: payload,
		}),
		setSessionToken: (state, { payload }: { payload: string }) => ({
			...state,
			sessionToken: payload,
		}),
	},
});

export const { setUserId, setSessionToken } = userSlice.actions;

export default userSlice.reducer;
