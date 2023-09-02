import { Dispatch, RefObject, SetStateAction, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
	popupRefCon?: RefObject<HTMLDivElement>;
	popupRef?: RefObject<HTMLDivElement>;
	setMuted: Dispatch<SetStateAction<boolean>>;
	muted: boolean;
	closePopup: (e: React.MouseEvent) => void;
};

function MutePopup({
	popupRefCon,
	popupRef,
	closePopup,
	setMuted,
	muted,
}: Props) {
	const [value, setValue] = useState("8 Hours");

	return ReactDOM.createPortal(
		<div
			id="mutePopup"
			ref={popupRefCon}
			onClick={closePopup}
			className="fixed z-30 bg-[#1a1a1aba] opacity-0 h-full w-full top-0 left-0 flex items-center justify-center transition-all duration-100"
		>
			<div
				id="popup"
				ref={popupRef}
				className="bg-secondary rounded-[4px] pt-[25px] pb-[20px] px-[20px] flex flex-col w-[500px] gap-[60px] justify-between scale-0 transition-all duration-200"
			>
				<div className="flex flex-col gap-[20px]">
					<p className="text-[lightgray] text-[20px]">Mute notifications</p>

					<span className="text-[14px] text-[#8f8f8f] leading-[1.5]">
						No one else in this chat will see that you muted it, and you will
						still be notified if you are mentioned.
					</span>

					<div className="flex flex-col gap-[18px]">
						{["8 Hours", "1 Week", "Always"].map((val, ind) => (
							<div key={ind} className="flex gap-[10px] items-center">
								<div
									onClick={() => setValue(val)}
									role="radio button"
									aria-checked={val === value}
									className={`border-solid border-2 ${
										val === value ? "border-primary" : "border-[#8f8f8f]"
									} w-[20px] h-[20px] rounded-[50%] flex items-center justify-center p-[3px]`}
								>
									{val === value && (
										<span className="h-full w-full rounded-[50%] bg-primary"></span>
									)}
								</div>

								<p className="text-[lightgray] text-[14px]">{val}</p>
							</div>
						))}
					</div>
				</div>

				<div className="flex items-center justify-end gap-[15px]">
					<button
						onClick={closePopup}
						className="font-medium text-primary/80 hover:text-primary text-[14px] bg-[transparent] px-[25px] py-[11px] rounded-[38px] border-solid border-[1px] border-[#4e536c] hover:shadow-[0px_0px_10px_#ffffff1a_inset,0px_5px_5px_#00000026] cursor-pointer transition-all duration-100"
					>
						Cancel
					</button>

					<button
						onClick={(e) => {
							closePopup(e);
							setMuted((prev) => !prev);
						}}
						className="font-medium text-secondary text-[14px] bg-primary px-[25px] py-[11px] rounded-[38px] hover:shadow-[0px_0px_10px_#ffffff1a_inset,0px_5px_5px_#00000026] cursor-pointer transition-all duration-100"
					>
						{muted ? "Unmute" : "Mute"}
					</button>
				</div>
			</div>
		</div>,
		document.querySelector("#main")!
	);
}

export default MutePopup;
