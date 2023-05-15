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
import img1 from "../images/b4.jpg";
import img2 from "../images/b3.jpg";
import img3 from "../images/3bb1.jpg";
import InfoTile from "./infoTile";
import ReactDOM from "react-dom";
import { useRef, useState } from "react";

function ContactInfo() {
	const [popup, setPopup] = useState(false);
	const [muted, setMuted] = useState(false);
	const [value, setValue] = useState("8 Hours");
	const popupRef = useRef<HTMLDivElement>(null);
	const mutePopupRef = useRef<HTMLDivElement>(null);

	const openMutePopup = () => {
		if (popupRef.current !== null && mutePopupRef.current !== null) {
			setPopup(true);

			setTimeout(() => {
				mutePopupRef.current!.classList.replace("opacity-0", "opacity-100");

				setTimeout(() => {
					popupRef.current!.classList.replace("scale-0", "scale-100");
				}, 100);
			}, 5);
		}
	};

	const closeMutePopup = () => {
		if (popupRef.current !== null && mutePopupRef.current !== null) {
			popupRef.current.classList.replace("scale-100", "scale-0");

			setTimeout(() => {
				mutePopupRef.current!.classList.replace("opacity-100", "opacity-0");

				setTimeout(() => {
					setPopup(false);
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
						clicked={openMutePopup}
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
					/>

					<InfoTile
						title={"Report Jay Z"}
						Icon={ThumbDown}
						color="text-[#ef5b5b]"
						iconColor="#ff7070"
						iconSize="20px"
						hover="hover:bg-[#ffffff1a]"
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

			{popup &&
				ReactDOM.createPortal(
					<div
						id="mutePopup"
						ref={mutePopupRef}
						onClick={closeMutePopup}
						className="fixed z-30 bg-[#1a1a1aba] opacity-0 h-full top-0 left-0 flex items-center justify-center transition-all duration-100"
					>
						<div
							id="popup"
							ref={popupRef}
							className="bg-secondary rounded-[4px] pt-[25px] pb-[20px] px-[20px] flex flex-col w-[450px] h-[320px] justify-between scale-0 transition-all duration-200"
						>
							<div className="flex flex-col gap-[20px]">
								<p className="text-[lightgray] text-[18px] font-medium">
									Mute notifications
								</p>

								<span className="text-[13px] text-[#8f8f8f] leading-[1.5]">
									No one else in this chat will see that you muted it, and you
									will still be notified if you are mentioned.
								</span>

								<div className="flex flex-col gap-[15px]">
									{["8 Hours", "1 Week", "Always"].map((val, ind) => (
										<div key={ind} className="flex gap-[10px] items-center">
											<div
												onClick={() => setValue(val)}
												role="radio button"
												aria-checked={val === value}
												className={`border-solid border-2 ${
													val === value ? "border-primary" : "border-[#8f8f8f]"
												} w-[18px] h-[18px] rounded-[50%] flex items-center justify-center p-[3px]`}
											>
												{val === value && (
													<span className="h-full rounded-[50%] bg-primary"></span>
												)}
											</div>

											<p className="text-[lightgray] text-[13px] font-medium">
												{val}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="flex items-center justify-end gap-[15px]">
								<button
									onClick={closeMutePopup}
									className="font-medium text-primary text-[12px] bg-[transparent] w-[80px] h-[35px] rounded-[35px] border-solid border-[1px] border-[#4e536c] hover:shadow-[0px_0px_10px_#ffffff1a_inset,0px_5px_5px_#00000026] cursor-pointer transition-all duration-100"
								>
									Cancel
								</button>

								<button
									onClick={() => {
										closeMutePopup();
										setMuted((prev) => !prev);
									}}
									className="font-medium text-secondary text-[12px] bg-primary w-[80px] h-[35px] rounded-[35px] hover:shadow-[0px_0px_10px_#ffffff1a_inset,0px_5px_5px_#00000026] cursor-pointer transition-all duration-100"
								>
									{muted ? "Unmute" : "Mute"}
								</button>
							</div>
						</div>
					</div>,
					document.querySelector("#main")!
				)}
		</div>
	);
}

export default ContactInfo;
