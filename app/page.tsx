import LeftChats from "@/components/leftChats";
import LeftCommunity from "@/components/leftCommunity";
import LeftNewChats from "@/components/leftNewChats";
import LeftStatus from "@/components/leftStatus";
import RightChatScreen from "@/components/rightChatScreen";
import RightIntro from "@/components/rightIntro";
import RightStatus from "@/components/rightStatus";
import StatusView from "@/components/statusView";

export default function Home() {
	return (
		<main className="h-screen">
			<div className="h-full flex w-full">
				{/* <section className="basis-[28.57%]"> */}
				{/* <LeftChats /> */}

				{/* <LeftNewChats /> */}

				{/* <LeftStatus /> */}

				{/* <LeftCommunity /> */}
				{/* </section> */}

				{/* <section className="basis-[71.43%]"> */}
				{/* <RightIntro /> */}

				{/* <RightChatScreen /> */}

				{/* <RightStatus />
				</section> */}

				<StatusView />
			</div>
		</main>
	);
}

