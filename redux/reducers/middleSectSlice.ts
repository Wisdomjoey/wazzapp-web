import { createSlice } from "@reduxjs/toolkit";

type Props = {
	selected: string[];
	isSelecting: boolean;
};

const initialState: Props = {
	selected: [],
	isSelecting: false,
};

const middleSectSlice = createSlice({
	name: "middleState",
	initialState: initialState,
	reducers: {
		toggleSelection(state, {payload}) {
			state.isSelecting = payload;

			return state;
		},
		addSelected(state, action) {
			state.selected.push(action.payload);

			return state;
		},
		removeSelected(state, action) {
			state.selected.splice(state.selected.indexOf(action.payload), 1);

			return state;
		},
		resetSelected(state) {
			state.selected = [];

			return state;
		},
	},
});

export const { addSelected, removeSelected, resetSelected, toggleSelection } =
	middleSectSlice.actions;
export default middleSectSlice.reducer;
