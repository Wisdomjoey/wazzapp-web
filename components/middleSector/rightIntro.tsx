import { Lock } from "@mui/icons-material";

function RightIntro() {
	return (
		<div className="h-full bg-secondary border-b-[5px] border-b-primary flex items-center justify-center flex-col py-[30px]">
			<p className="text-[30px] mb-[20px] text-[lightgray]">WazzApp Web</p>

			<span className="text-[13px] text-[#979797] mb-[7px]">
				Send and receive messages without keeping you phone online
			</span>
			<span className="text-[13px] text-[#979797]">
				Use WazzApp on up to 4 linked devices and 1 phone at a time
			</span>

			<div className="flex items-end gap-[5px]">
				<Lock sx={{ fontSize: 12, color: "#797979" }} />

				<span className="text-[13px] text-[#797979]">
					End-to-end encrypted
				</span>
			</div>
		</div>
	);
}

export default RightIntro;
