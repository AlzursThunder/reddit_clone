import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/user/userSlice";

const store = configureStore({
	reducer: {
		user: UserSlice,
	},
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
