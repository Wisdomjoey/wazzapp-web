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

export default function App() {
	const routes = useSelector((state) => (state as any).routes);

	return (
		<main id="main" className="h-screen">
			<div className="h-full flex justify-start bg-darker relative">
				{["home", "status"].includes(routes.route) && (
					<>
						<section id="leftSection" className="basis-[30%]">
							{routes.subRoutes.includes("communities") && <LeftCommunity />}

							{routes.route === "home" && <LeftChats />}

							{routes.subRoutes.includes("newchat") && <LeftNewChats />}

							{routes.route === "status" && <LeftStatus />}
						</section>

						<section className="flex-1">
							{routes.route === "home" &&
								routes.subRoutes.includes("intro") && <RightIntro />}

							{routes.route === "home" && routes.subRoutes.includes("chat") && (
								<RightChatScreen />
							)}

							{routes.route === "status" && <RightStatus />}
						</section>

						{["contactInfo", "searchMsgs"].includes(routes.sideSect) && (
							<section
								id="sideSect"
								className={`basis-0 transition-all duration-200`}
							>
								{routes.sideSect === "contactInfo" && <ContactInfo />}

								{routes.sideSect === "searchMsgs" && <SearchMsgs />}
							</section>
						)}
					</>
				)}

				{routes.route === "statusView" && <StatusView />}
			</div>
		</main>
	);
}
