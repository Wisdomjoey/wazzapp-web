"use client";

import ContactInfo from "@/components/contactInfo";
import LeftChats from "@/components/leftChats";
import LeftCommunity from "@/components/leftCommunity";
import LeftNewChats from "@/components/leftNewChats";
import LeftStatus from "@/components/leftStatus";
import RightChatScreen from "@/components/rightChatScreen";
import RightIntro from "@/components/rightIntro";
import RightStatus from "@/components/rightStatus";
import SearchMsgs from "@/components/searchMsgs";
import StatusView from "@/components/statusView";
import { useSelector } from "react-redux";
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

