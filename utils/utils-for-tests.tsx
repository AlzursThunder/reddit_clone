import React, { PropsWithChildren } from "react"
import { RenderOptions, render } from "@testing-library/react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import SearchInputSlice from "@/redux/features/search-input/searchInputSlice";
import SigninFormSlice from "@/redux/features/signin-form/signinFormSlice";
import UserSlice from "@/redux/features/user/userSlice";
import type { AppStore, RootState } from "@/redux/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = configureStore({
			reducer: {
				user: UserSlice,
				searchInput: SearchInputSlice,
				signInForm: SigninFormSlice,
			},
			preloadedState,
		}),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}
	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};