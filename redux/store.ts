import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./reducers/routeSlice";
import middleSectSlice from "./reducers/middleSectSlice";
import leftSectSlice from "./reducers/leftSectSlice";

// const rootReducer = combineReducers({
// 	routes: routeSlice,
// });

const store = configureStore({
	reducer: {
		routes: routeSlice,
		middleState: middleSectSlice,
		leftState: leftSectSlice,
	},
});

export default store;
