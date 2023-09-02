import ChatBox from "./chatBox";
import ChatNavbar from "./chatNavbar";
import MessageTyper from "./messageTyper";
import Mic from "wavesurfer.js/dist/plugins/";
import { CheckBox, CropSquareOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addSelected, removeSelected } from "@/redux/reducers/middleSectSlice";
import { useEffect } from "react";

function RightChatScreen() {
	const middleState = useSelector((state) => (state as any).middleState);
	const dispatch = useDispatch();

	return (
		<div className="h-full bg-darker flex items-center justify-between flex-col">
			<ChatNavbar />

			<div className="w-full flex-1 flex flex-col-reverse overflow-auto py-[20px] gap-[20px]">
				<div
					className={`flex items-center ${
						middleState.selected.includes("1")
							? "bg-[#ffffff0f]"
							: "bg-[transparent]"
					}`}
				>
					{middleState.isSelecting && (
						<div
							onClick={() =>
								middleState.selected.includes("1")
									? dispatch(removeSelected("1"))
									: dispatch(addSelected("1"))
							}
							className="ml-[20px] cursor-pointer min-w-[28px]"
						>
							{middleState.selected.includes("1") ? (
								<CheckBox className="text-primary" sx={{ fontSize: 26 }} />
							) : (
								<CropSquareOutlined sx={{ fontSize: 28, color: "#979797" }} />
							)}
						</div>
					)}

					<ChatBox id={0} sent={false} />
				</div>
			</div>

			<MessageTyper />
		</div>
	);
}

export default RightChatScreen;
