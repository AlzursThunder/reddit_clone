import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
	userId: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserId: (state, { payload }: { payload: string }) => ({
			...state,
			userId: payload,
		}),
	},
});

export const { setUserId, getDeviceData } = userSlice.actions;

export default userSlice.reducer;
