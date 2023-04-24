import ChatBox from "./chatBox";
import ChatNavbar from "./chatNavbar";
import MessageTyper from "./messageTyper";

function RightChatScreen() {
	return (
		<div className="w-ful h-full bg-darker border-l-[1px] border-solid border-l-secondaryBorder flex items-center justify-between flex-col">
			<ChatNavbar />

			<div className="flex-1 w-full flex flex-col-reverse overflow-auto py-[20px] gap-[20px]">
				<ChatBox />
			</div>

			<MessageTyper />
		</div>
	);
}

export default RightChatScreen;
