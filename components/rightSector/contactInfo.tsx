import {
	ArrowForwardIos,
	AvTimer,
	Block,
	Delete,
	Lock,
	Notifications,
	Person,
	Star,
	ThumbDown,
} from "@mui/icons-material";
import SectNavbar from "./sectNavbar";
import Image from "next/image";
import img1 from "../../images/b4.jpg";
import img2 from "../../images/b3.jpg";
import img3 from "../../images/3bb1.jpg";
import InfoTile from "../infoTile";
import { useRef, useState } from "react";
import MutePopup from "../popups/mutePopup";
import ReportPopup from "../popups/reportPopup";
import BlockPopup from "../popups/blockPopup";

function ContactInfo() {
	const [popup, setPopup] = useState<string>("");
	const [muted, setMuted] = useState(false);
	const popupRef = useRef<HTMLDivElement>(null);
	const popupRefCon = useRef<HTMLDivElement>(null);

	const openPopup = (popupName: string) => {
		setPopup(popupName);

		setTimeout(() => {
			if (popupRef.current !== null && popupRefCon.current !== null) {
				popupRefCon.current.classList.replace("opacity-0", "opacity-100");

				setTimeout(() => {
					popupRef.current!.classList.replace("scale-0", "scale-100");
				}, 100);
			}
		}, 5);
	};

	const closePopup = () => {
		if (popupRef.current !== null && popupRefCon.current !== null) {
			popupRef.current.classList.replace("scale-100", "scale-0");

			setTimeout(() => {
				popupRefCon.current!.classList.replace("opacity-100", "opacity-0");

				setTimeout(() => {
					setPopup("");
				}, 100);
			}, 200);
		}
	};

	return (
		<div
			id="contact"
			className="h-full flex flex-col border-l-[1px] border-solid border-l-secondaryBorder opacity-0 transition-all duration-100"
		>
			<SectNavbar title={"Contact info"} />

			<div className="bg-darker h-[calc(100%-60px)] flex flex-col gap-[10px] overflow-auto pb-[30px]">
				<div className="py-[25px] flex flex-col items-center bg-[#ffffff0d] gap-[15px]">
					<div className="w-[180px] h-[180px] rounded-[50%] bg-[lightgray] relative overflow-hidden">
						<Person
							sx={{
								color: "white",
								fontSize: "200px",
								position: "absolute",
								bottom: "-40px",
								left: "50%",
								transform: "translateX(-50%)",
							}}
						/>
					</div>

					<div className="flex flex-col gap-[10px] items-center">
						<p className="text-[white] text-[21px]">Jay Z</p>

						<span className="text-[white] text-[15px] opacity-40">
							+234 802 949 4195
						</span>
					</div>
				</div>

				<div className="py-[20px] px-[30px] flex flex-col justify-center items-start bg-[#ffffff0d] gap-[15px]">
					<span className="text-[white] text-[14px] opacity-50">About</span>

					<span className="text-[white] text-[15px] opacity-40">
						Something here...
					</span>
				</div>

				<div className="py-[20px] px-[30px] flex flex-col justify-center bg-[#ffffff0d] gap-[15px]">
					<div className="flex justify-between items-center cursor-pointer">
						<span className="text-[white] text-[14px] opacity-50">
							Media, links and docs
						</span>

						<div className="flex items-center gap-[5px]">
							<span className="text-[white] text-[14px] opacity-50">146</span>

							<ArrowForwardIos sx={{ color: "lightgray", fontSize: "14px" }} />
						</div>
					</div>

					<div className="flex items-center justify-between px-[5px]">
						{[img1, img2, img3].map((val, ind) => (
							<div
								key={ind}
								className="w-[100px] h-[100px] rounded-[7px] p-[7px] bg-[linear-gradient(to_bottom,#2d3148,#2d3148,#161824d1)]"
							>
								<div className="relative h-full overflow-hidden">
									<span className="absolute z-[2] h-full top-0 left-0 bg-[linear-gradient(to_bottom,transparent,transparent,#000000db)]"></span>

									<Image alt="image" src={val} className="object-cover" />
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col justify-center items-start bg-[#ffffff0d]">
					<InfoTile
						title={"Starred messages"}
						Icon={Star}
						trailing={
							<ArrowForwardIos
								sx={{ color: "lightgray", fontSize: "15px", opacity: ".8" }}
							/>
						}
					/>

					<InfoTile
						title={"Mute notifications"}
						Icon={Notifications}
						clicked={() => openPopup("mute")}
						trailing={
							<div className="relative flex items-center">
								<span
									className={`w-[18px] h-[18px] rounded-[50%] absolute transition-all duration-200 ${
										muted
											? "translate-x-[11px] bg-primary"
											: "-translate-x-[9px] bg-[#bbbbbb]"
									}`}
								></span>

								<span
									className={`w-[20px] h-[12px] rounded-[12px] opacity-30 transition-all duration-200 ${
										muted ? "bg-primary" : "bg-[lightgray]"
									}`}
								></span>
							</div>
						}
					/>

					<InfoTile
						title={"Dissappearing messages"}
						Icon={AvTimer}
						text="Off"
						trailing={
							<ArrowForwardIos
								sx={{ color: "lightgray", fontSize: "15px", opacity: ".8" }}
							/>
						}
					/>

					<InfoTile
						title={"Encryption"}
						Icon={Lock}
						text="Messages are end-to-end encrypted. Click to verify."
					/>

					<InfoTile
						title={"Block Jay Z"}
						Icon={Block}
						color="text-[#ef5b5b]"
						iconColor="#ff7070"
						iconSize="20px"
						hover="hover:bg-[#ffffff1a]"
						clicked={() => openPopup("block")}
					/>

					<InfoTile
						title={"Report Jay Z"}
						Icon={ThumbDown}
						color="text-[#ef5b5b]"
						iconColor="#ff7070"
						iconSize="20px"
						hover="hover:bg-[#ffffff1a]"
						clicked={() => openPopup("report")}
					/>

					<InfoTile
						title={"Delete chat"}
						Icon={Delete}
						color="text-[#ef5b5b]"
						iconColor="#ff7070"
						iconSize="20px"
						hover="hover:bg-[#ffffff1a]"
					/>
				</div>
			</div>

			{popup === "mute" && (
				<MutePopup
					setMuted={setMuted}
					muted={muted}
					closePopup={closePopup}
					popupRefCon={popupRefCon}
					popupRef={popupRef}
				/>
			)}

			{popup === "block" && (
				<BlockPopup
					closePopup={closePopup}
					popupRefCon={popupRefCon}
					popupRef={popupRef}
				/>
			)}
			{popup === "report" && (
				<ReportPopup
					closePopup={closePopup}
					popupRefCon={popupRefCon}
					popupRef={popupRef}
				/>
			)}
		</div>
	);
}

export default ContactInfo;
