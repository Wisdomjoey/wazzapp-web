import NewChatNav from "./newChatNav";

function LeftCommunity() {
	return (
		<div className="w-full h-full">
			<NewChatNav text="Communities" />

			<div className="w-full h-[calc(100%-120px)] bg-darker p-[30px] flex flex-col items-center">
				<h1 className="text-[white] font-bold text-[20px]">
					Introducing communities
				</h1>

				<br />

				<span className="text-center text-[#a7a7a7] text-[13px] leading-5 opacity-90">
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
