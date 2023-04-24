"use client";

import Image from "next/image";
import profile from "../images/profile.png";
import { MoreVert, Search } from "@mui/icons-material";

function ChatNavbar() {
	return (
		<nav className="w-full h-[60px] bg-secondary flex items-center justify-between px-[20px]">
			<div className="flex gap-[20px] items-center">
				<Image
					src={profile}
					alt={"profile"}
					height={40}
					width={40}
					className="rounded-[50%]"
				/>

				<span className="font-semibold text-[14px] text-[white]">Jay Z</span>
			</div>

			<div className="flex items-center gap-[25px]">
				<Search id="searchIcon" sx={{ color: "lightgray", fontSize: "25px" }} />
				<MoreVert sx={{ color: "lightgray", fontSize: "25px" }} />
			</div>
		</nav>
	);
}

export default ChatNavbar;
