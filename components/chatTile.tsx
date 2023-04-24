"use client";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Image, { StaticImageData } from "next/image";

type Props = {
	id?: string;
	text?: string;
	span?: string;
	pic?: StaticImageData;
	showSpan?: boolean;
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
};

function ChatTile({ id, text, span, pic, showSpan = false, Icon }: Props) {
	const showIcon = () => {
		const drop = document.getElementById(`drop${id}`);
		drop!.style.width = "auto";
	};

	const hideIcon = () => {
		const drop = document.getElementById(`drop${id}`);
		drop!.style.width = "0px";
	};

	return (
		<div
			className="w-full flex items-center gap-[20px] pl-[15px] cursor-pointer hover:bg-[#ffffff1a]"
			onMouseOver={showSpan ? undefined : showIcon}
			onMouseLeave={showSpan ? undefined : hideIcon}
		>
			{Icon ? (
				<div className="rounded-[50%] w-[45px] h-[45px] bg-primary flex items-center justify-center">
					<Icon sx={{ color: "#5C5C5B", fontSize: "25px" }} />
				</div>
			) : (
				<Image
					src={pic!}
					alt={"pic"}
					height={45}
					width={45}
					className="rounded-[50%]"
				/>
			)}

			<div className="flex-1 border-t border-solid border-secondary h-[70px]">
				<div className="w-full flex flex-col pr-[15px] h-full justify-center gap-[5px]">
					{text ? (
						<span className="text-[16px] text-[white] font-normal">{text}</span>
					) : (
						<div className="w-full flex items-end justify-between">
							<p className="text-[16px] text-[white] font-semibold">
								Hashira Hoshi
							</p>

							<span className="text-[11px] text-primary">7:15 AM</span>
						</div>
					)}

					<div className="w-full flex items-center justify-between overflow-hidden gap-[10px]">
						{showSpan ? (
							span && <p className="text-[gray] text-[12px]">{span}</p>
						) : (
							<>
								<div className="w-[200px] overflow-hidden pr-[10px]">
									<p className="overflow-hidden text-[12px] text-[white] overflow-ellipsis whitespace-nowrap font-medium opacity-[.9]">
										Hello! jhfhfjhdrfsdfgdgsrtesrthtrttrrrrsrs adjbakahudu
									</p>
								</div>

								<div className="flex items-center gap-[5px]">
									<span className="px-[6px] py-[3px] font-medium rounded-[20px] text-[11px] text-darker bg-primary">
										2
									</span>

									<div
										id={`drop${id}`}
										className="w-[0px] opacity-[.7] transition-all duration-[.5s]"
									>
										<svg
											viewBox="0 0 19 20"
											height="20"
											width="20"
											preserveAspectRatio="xMidYMid meet"
											version="1.1"
											x="0px"
											y="0px"
											xmlSpace="preserve"
										>
											<path
												fill="lightgray"
												d="M3.8,6.7l5.7,5.7l5.7-5.7l1.6,1.6l-7.3,7.2L2.2,8.3L3.8,6.7z"
											></path>
										</svg>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatTile;
