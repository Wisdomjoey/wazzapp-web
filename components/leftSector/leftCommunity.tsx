import { useDispatch } from "react-redux";
import NewChatNav from "./newChatNav";
import { removeSubRoute } from "@/redux/reducers/routeSlice";
import { useRef } from "react";

function LeftCommunity() {
	const dispatch = useDispatch();
	const commRef = useRef<HTMLDivElement>(null);

	const closeCommunity = () => {
		if (commRef.current !== null) {
			commRef.current.classList.replace("translate-x-0", "-translate-x-[100%]");

			setTimeout(() => {
				dispatch(removeSubRoute("communities"));
			}, 200);
		}
	};

	return (
		<div
			id="community"
			ref={commRef}
			className="overflow-hidden w-full h-full transition-all -translate-x-[100%] duration-200 absolute top-0 left-0 z-[1]"
		>
			<NewChatNav text="Communities" clicked={closeCommunity} />

			<div className="h-[calc(100%-120px)] bg-darker p-[30px] flex flex-col items-center">
				<h1 className="text-[white] font-bold text-[22px]">
					Introducing communities
				</h1>

				<br />

				<span className="text-center text-[#a7a7a7] text-[14px] leading-5 opacity-90">
					Easily organize your related groups and send announcements. Now, your
					communities, like neighborhoods or schools, can have their own space.
				</span>

				<br />
				<br />

				<button className="px-[22px] py-[12px] font-medium rounded-[20px] bg-primary text-darker text-[13px]">
					Start a community
				</button>
			</div>
		</div>
	);
}

export default LeftCommunity;
