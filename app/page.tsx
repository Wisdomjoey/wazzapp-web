"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import App from "./_app";

export default function Home() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

