"use client";

import { DoneAllRounded } from "@mui/icons-material";

function ChatBox() {
	return (
		<div className="w-full flex items-center justify-end px-[50px]">
			<div className="rounded-[5px] bg-primaryDark flex flex-col relative">
				<div className="w-full px-[3px] pt-[3px]">
					<div className="w-full p-[10px] flex flex-col gap-[10px] justify-start rounded-[5px] bg-[#00000033] border-l-[4px] border-solid border-primary">
						<p className="text-[12px] text-[cyan] font-medium">Jay Z</p>

						<p className="text-[12px] text-[white] opacity-[.8]">Yeah</p>
					</div>
				</div>

				<div className="flex items-center gap-[10px] py-[4px]">
					<p className="ml-[10px] text-[14px] my-[5px] text-[white] font-normal">
						okay
					</p>

					<div className="flex items-end gap-[5px] self-end">
						<span className="text-[10px] text-[white] opacity-[.8]">
							8:55 PM
						</span>

						<DoneAllRounded
							sx={{ fontSize: "14px", color: "cyan", marginRight: "5px" }}
						/>
					</div>

					<div className="w-[10px] h-[10px] absolute top-0 right-[-5px] rounded-[2px] overflow-hidden">
						<svg viewBox="0 0 100 100">
							<path fill="#009d79" d="M0 0 L100 0 L50 100 L0 0 Z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatBox;
