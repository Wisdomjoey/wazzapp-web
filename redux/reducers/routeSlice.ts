import { createSlice } from "@reduxjs/toolkit";

type Props = {
	route: string;
	sideSect: string;
	subRoutes: string[];
};

const initialState: Props = {
	route: "home",
	sideSect: "",
	subRoutes: ["intro"],
};

const routeSlice = createSlice({
	name: "routes",
	initialState: initialState,
	reducers: {
		changeRoute(state, action) {
			state.route = action.payload;

			return state;
		},
		changeSect(state, action) {
			state.sideSect = action.payload;

			return state;
		},
		addSubRoute(state, action) {
			state.subRoutes.push(action.payload);

			return state;
		},
		removeSubRoute(state, action) {
			const index = state.subRoutes.indexOf(action.payload);

			state.subRoutes.splice(index, 1);

			return state;
		},
	},
});

export const { changeRoute, addSubRoute, removeSubRoute, changeSect } =
	routeSlice.actions;
export default routeSlice.reducer;
