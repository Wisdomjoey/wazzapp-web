import ChatBox from "./chatBox";
import ChatNavbar from "./chatNavbar";
import MessageTyper from "./messageTyper";

function RightChatScreen() {
	return (
		<div className="h-full bg-darker flex items-center justify-between flex-col">
			<ChatNavbar />

			<div className="w-full flex-1 flex flex-col-reverse overflow-auto py-[20px] gap-[20px]">
				<ChatBox id={0} />
			</div>

			<MessageTyper />
		</div>
	);
}

export default RightChatScreen;
