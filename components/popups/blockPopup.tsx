import { CheckBox } from "@mui/icons-material";
import { RefObject } from "react";
import ReactDOM from "react-dom";

type Props = {
	popupRefCon?: RefObject<HTMLDivElement>;
	popupRef?: RefObject<HTMLDivElement>;
	closePopup: (e: React.MouseEvent) => void;
};

function BlockPopup({ popupRefCon, popupRef, closePopup }: Props) {
	return ReactDOM.createPortal(
		<div
			id="blockPopup"
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
					<p className="text-[lightgray] text-[20px]">
						Block Jay Z?
					</p>

					<div className="flex gap-[10px]">
						<CheckBox className="text-primary" sx={{ fontSize: 23 }} />

						<p className="text-[lightgray] text-[14px]">
							Report contact<br /><br />The last 5 messages from this user will be sent to WazzApp
						</p>
					</div>

					<hr className="border-secondaryBorder" />

					<span className="text-[14px] text-[#8f8f8f] leading-[1.5]">
						Blocked contacts will no longer be able to call you or send you messages. This contact will not be notified.
					</span>
				</div>

				<div className="flex items-center justify-end gap-[15px]">
					<button
						onClick={closePopup}
						className="font-medium text-primary/80 hover:text-primary text-[14px] bg-[transparent] px-[25px] py-[11px] rounded-[38px] border-solid border-[1px] border-[#4e536c] hover:shadow-[0px_0px_10px_#ffffff1a_inset,0px_5px_5px_#00000026] cursor-pointer transition-all duration-100"
					>
						Cancel
					</button>

					<button
						onClick={closePopup}
						className="font-medium text-secondary text-[14px] bg-primary px-[25px] py-[11px] rounded-[38px] hover:shadow-[0px_0px_10px_#ffffff1a_inset,0px_5px_5px_#00000026] cursor-pointer transition-all duration-100"
					>
						Block
					</button>
				</div>
			</div>
		</div>,
		document.querySelector("#main")!
	);
}

export default BlockPopup;
