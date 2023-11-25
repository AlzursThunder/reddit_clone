import { createSlice } from "@reduxjs/toolkit";

const initialState: SearchInputState = {
	searchPhrase: "",
};

const searchInputSlice = createSlice({
	name: "search-input",
	initialState,
	reducers: {
		updateSearchPhrase: (state, { payload }: { payload: string }) => ({
			...state,
			searchPhrase: payload,
		}),
		clearSearchPhrase: (state) => ({
			...state,
			searchPhrase: "",
		}),
	},
});

export const { updateSearchPhrase, clearSearchPhrase } =
	searchInputSlice.actions;
export default searchInputSlice.reducer;
