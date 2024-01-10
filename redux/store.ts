import { configureStore } from "@reduxjs/toolkit";
import SearchInputSlice from "./features/search-input/searchInputSlice";
import SigninFormSlice from "./features/signin-form/signinFormSlice";
import UserSlice from "./features/user/userSlice";

const store = configureStore({
	reducer: {
		user: UserSlice,
		searchInput: SearchInputSlice,
		signInForm: SigninFormSlice,
	},
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
