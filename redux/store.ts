import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./reducers/routeSlice";

// const rootReducer = combineReducers({
// 	routes: routeSlice,
// });

const store = configureStore({
	reducer: {
		routes: routeSlice,
	},
});

export default store;
