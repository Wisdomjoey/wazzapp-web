import ChatTile from "./chatTile";
import SearchHeader from "../searchHeader";
import SideNavbar from "./sideNavbar";
import pic from "../../images/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { addSubRoute, removeSubRoute } from "@/redux/reducers/routeSlice";
import MenuBox from "../menuBox";
import { useRef, createRef } from "react";
import SelectionNav from "./selectionNav";
import { addSelected, removeSelected } from "@/redux/reducers/leftSectSlice";
import { CheckBox, CropSquareOutlined } from "@mui/icons-material";

function LeftChats() {
	const leftState = useSelector((state) => (state as any).leftState);
	const dispatch = useDispatch();
	const menuRef = useRef<HTMLDivElement>(null);
	const tileRefs = Array(5)
		.fill(null)
		.map(() => createRef<HTMLDivElement>());

	const openChat = () => {
		dispatch(removeSubRoute("intro"));
		dispatch(addSubRoute("chat"));
	};

	return (
		<div className="h-full flex flex-col transition-all duration-200">
			<SideNavbar />

			<div className="bg-darker h-[calc(100%-60px)] flex flex-col">
				{leftState.isSelecting ? (
					<SelectionNav />
				) : (
					<SearchHeader holder="Search or start new chat" id="ch" />
				)}

				<div className="h-[calc(100%-44px)] overflow-y-auto">
					<div className="flex flex-col items-start pb-[25px]">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, ind) => (
							<div
								key={e}
								className={`flex items-center w-full ${
									leftState.selected.includes(`${e}`)
										? "bg-[#ffffff0f]"
										: "bg-[transparent] hover:bg-[#ffffff1a]"
								}`}
							>
								{leftState.isSelecting && (
									<div
										onClick={() =>
											leftState.selected.includes(`${e}`)
												? dispatch(removeSelected(`${e}`))
												: dispatch(addSelected(`${e}`))
										}
										className="ml-[20px] cursor-pointer min-w-[28px]"
									>
										{leftState.selected.includes(`${e}`) ? (
											<CheckBox
												className="text-primary"
												sx={{ fontSize: 26 }}
											/>
										) : (
											<CropSquareOutlined
												sx={{ fontSize: 28, color: "#979797" }}
											/>
										)}
									</div>
								)}

								<ChatTile
									id={ind}
									pic={pic}
									name="Hashira Hoshi"
									lastMsg="Hello! wassup"
									msgCount={10}
									clicked={openChat}
									tileRefs={tileRefs}
									menuRef={menuRef}
								/>
							</div>
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
