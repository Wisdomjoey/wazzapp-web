"use client";

import { West } from "@mui/icons-material";

type Props = {
	text: string;
};

function NewChatNav({ text }: Props) {
	return (
		<div className="bg-secondary w-full flex items-end h-[120px] p-[25px] gap-[30px]">
			<West
				// onClick={unfocus}
				// id="arrowIcon"
				sx={{
					fontSize: "20px",
					cursor: "pointer",
					color: "white",
				}}
			/>

			<span className="font-medium text-[18px] text-[white]">{text}</span>
		</div>
	);
}

export default NewChatNav;
