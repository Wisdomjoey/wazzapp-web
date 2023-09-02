import { createSlice } from "@reduxjs/toolkit";

type Props = {
	selected: string[];
	isSelecting: boolean;
};

const initialState: Props = {
	selected: [],
	isSelecting: false,
};

const leftSectSlice = createSlice({
	name: "leftState",
	initialState: initialState,
	reducers: {
		toggleSelection(state, action) {
			state.isSelecting = action.payload;

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
	leftSectSlice.actions;
export default leftSectSlice.reducer;
