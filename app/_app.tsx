"use client";

import ContactInfo from "@/components/rightSector/contactInfo";
import LeftChats from "@/components/leftSector/leftChats";
import LeftCommunity from "@/components/leftSector/leftCommunity";
import LeftNewChats from "@/components/leftSector/leftNewChats";
import LeftStatus from "@/components/leftSector/leftStatus";
import RightChatScreen from "@/components/middleSector/rightChatScreen";
import RightIntro from "@/components/middleSector/rightIntro";
import RightStatus from "@/components/middleSector/rightStatus";
import SearchMsgs from "@/components/rightSector/searchMsgs";
import StatusView from "@/components/pages/statusView";
import { useSelector } from "react-redux";
import LeftSettings from "@/components/leftSector/leftSettings";

export default function App() {
	const routes = useSelector((state) => (state as any).routes);

	return (
		<main id="main" className="h-screen relative">
			<div className="h-full flex justify-start bg-darker relative">
				{["home", "status"].includes(routes.route) && (
					<>
						<section id="leftSection" className="basis-[30%] relative overflow-hidden border-r-[1px] border-r-secondaryBorder">
							{routes.subRoutes.includes("communities") && <LeftCommunity />}

							{routes.subRoutes.includes("settings") && <LeftSettings />}

							{routes.route === "home" && <LeftChats />}

							{routes.subRoutes.includes("newChat") && <LeftNewChats />}

							{routes.route === "status" && <LeftStatus />}
						</section>

						<section className="flex-1 overflow-hidden">
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
