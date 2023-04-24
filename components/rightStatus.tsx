"use client";

import { Close, DataUsage } from "@mui/icons-material";
import IconBox from "./iconBox";

function RightStatus() {
	return (
		<div className="w-full h-full bg-darker">
			<div className="h-full">
				<div className="w-full flex items-center justify-end px-[20px] py-[10px]">
					<IconBox title={"Close"}>
						<Close sx={{ color: "white", fontSize: "25px" }} />
					</IconBox>
				</div>

				<div className="flex justify-center pt-[20px]">
					<DataUsage sx={{ color: "gray", fontSize: "100px" }} />
				</div>

				<div className="flex justify-center items-center h-[calc(100%-200px)]">
					<span className="justify-self-center text-[gray] text-[15px] font-medium">
						Click on a contact to view their status updates
					</span>
				</div>
			</div>
		</div>
	);
}

export default RightStatus;
