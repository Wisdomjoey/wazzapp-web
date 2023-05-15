import ChatTile from "./chatTile";
import SearchHeader from "./searchHeader";
import SideNavbar from "./sideNavbar";
import pic from "../images/profile.png";
import { useDispatch } from "react-redux";
import { addSubRoute, removeSubRoute } from "@/redux/reducers/routeSlice";
import MenuBox from "./menuBox";
import { useRef, createRef } from "react";

function LeftChats() {
	const dispatch = useDispatch();
	const menuRef = useRef<HTMLDivElement>(null);
	const tileRefs: React.RefObject<HTMLDivElement>[] = Array(5)
		.fill(null)
		.map(() => createRef<HTMLDivElement>());

	const openChat = () => {
		dispatch(removeSubRoute("intro"));
		dispatch(addSubRoute("chat"));
	};

	return (
		<div className="h-full flex flex-col border-r-[1px] border-r-secondaryBorder transition-all duration-200">
			<SideNavbar />

			<div className="bg-darker h-[calc(100%-60px)] flex flex-col">
				<SearchHeader holder="Search or start new chat" id="ch" />

				<div className="h-[calc(100%-44px)] overflow-y-auto">
					<div className="flex flex-col items-start pb-[25px]">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, ind) => (
							<ChatTile
								key={e}
								id={ind}
								pic={pic}
								name="Hashira Hoshi"
								lastMsg="Hello! wassup"
								msgCount={10}
								clicked={openChat}
								tileRefs={tileRefs}
								menuRef={menuRef}
							/>
						))}

						<MenuBox
							width="w-[200px]"
							height="h-[220px]"
							id="Ch"
							links={[
								{ text: "Archive chat" },
								{ text: "Mute notifications" },
								{ text: "Exit group" },
								{ text: "Pin chats" },
								{ text: "Mark as read" },
							]}
							menuRef={menuRef}
							tileRefs={tileRefs}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftChats;
