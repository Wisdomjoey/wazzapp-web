"use client";

import {
	AttachFileOutlined,
	MicOutlined,
	SentimentSatisfiedOutlined,
} from "@mui/icons-material";

function MessageTyper() {
	return (
		<div className="w-full h-[60px] bg-secondary flex items-center justify-between px-[20px] py-[10px] gap-[20px]">
			<SentimentSatisfiedOutlined
				sx={{
					color: "lightgray",
					opacity: 0.7,
					fontSize: "25px",
					cursor: "pointer",
				}}
			/>

			<AttachFileOutlined
				sx={{
					color: "lightgray",
					opacity: 0.7,
					fontSize: "25px",
					transform: "rotate(45deg)",
					cursor: "pointer",
				}}
			/>

			<div className="flex-1 h-full rounded-[7px] bg-secondaryLight flex items-center px-[20px]">
				<input
					type="text"
					className="flex-1 bg-[transparent] border-none outline-none placeholder:text-[lightgray] placeholder:opacity-[.7] placeholder:text-[14px] text-[lightgray] my-[5px]"
					placeholder="Type a message"
				/>
			</div>

			<MicOutlined
				sx={{
					color: "lightgray",
					opacity: 0.7,
					fontSize: "25px",
					cursor: "pointer",
				}}
			/>
		</div>
	);
}

export default MessageTyper;
