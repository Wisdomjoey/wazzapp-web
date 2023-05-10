import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Image, { StaticImageData } from "next/image";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import MenuBox from "./menuBox";

type Props = {
	id?: number;
	text?: string;
	name?: string;
	lastMsg?: string;
	msgCount?: number;
	span?: string;
	pic?: StaticImageData;
	showSpan?: boolean;
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
	clicked?: (
		e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
	) => void;
};

function ChatTile({
	id,
	text,
	name,
	lastMsg,
	msgCount,
	span,
	pic,
	showSpan = false,
	Icon,
	clicked,
}: Props) {
	const [open, setopen] = useState(false);

	const showIcon = () => {
		const drop = document.getElementById(`drop${id}`);

		drop!.classList.replace("hidden", "flex");

		setTimeout(() => {
			drop!.classList.replace("w-0", "w-[20px]");
			drop!.classList.replace("opacity-0", "opacity-70");
		}, 5);
	};

	const hideIcon = () => {
		const drop = document.getElementById(`drop${id}`);

		drop!.classList.replace("w-[20px]", "w-0");
		drop!.classList.replace("opacity-70", "opacity-0");

		setTimeout(() => {
			drop!.classList.replace("flex", "hidden");
		}, 300);
	};

	const openMenu = useCallback(
		(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
			e.preventDefault();

			if (!open) {
				const menu = document.getElementById(`menuCh${id}`);
				const tile = document.querySelectorAll(`#tileCh${id}`);

				menu!.classList.replace("hidden", "flex");
				menu!.style.left = `${e.clientX}px`;
				menu!.style.right = "revert";

				if (window.innerHeight - e.clientY < 220) {
					menu!.style.bottom = `${window.innerHeight - e.clientY}px`;
					menu!.style.top = "revert";
					menu!.classList.add("origin-bottom-left");
				} else {
					menu!.style.top = `${e.clientY}px`;
					menu!.style.bottom = "revert";
					menu!.classList.add("origin-top-left");
				}

				setTimeout(() => {
					menu!.classList.replace("scale-0", "scale-100");

					setTimeout(() => {
						tile.forEach((val) => {
							val.classList.replace("opacity-0", "opacity-100");
						});

						setTimeout(() => {
							setopen(true);
						}, 150);
					}, 200);
				}, 5);
			}
		},
		[id, open]
	);

	const closeMenu = useCallback(
		(e: globalThis.MouseEvent) => {
			const menu = document.getElementById(`menuCh${id}`);
			const tile = document.querySelectorAll(`#tileCh${id}`);
			const target = e.target as HTMLElement;

			if (![`menuCh${id}`, `menuTileCh${id}`].includes(target.id) && open) {
				menu!.classList.replace("scale-100", "scale-0");

				setTimeout(() => {
					menu!.classList.replace("flex", "hidden");
					menu!.classList.remove("origin-top-left");
					menu!.classList.remove("origin-bottom-left");

					tile.forEach((val) => {
						val.classList.replace("opacity-100", "opacity-0");
					});

					setopen(false);
				}, 200);
			}
		},
		[id, open]
	);

	useEffect(() => {
		window.addEventListener("click", closeMenu);

		return () => window.removeEventListener("click", closeMenu);
	}, [closeMenu]);

	return (
		<div className="w-full flex items-center">
			<div
				onClick={clicked}
				onContextMenu={openMenu}
				className="flex-1 flex items-center gap-[20px] pl-[15px] cursor-pointer hover:bg-[#ffffff1a]"
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
					<div className="flex flex-col pr-[15px] h-full justify-center gap-[2px]">
						{text ? (
							<span className="text-[16px] text-[white] font-normal">
								{text}
							</span>
						) : (
							<div className="flex items-end justify-between">
								<p className="text-[16px] text-[white] font-semibold">{name}</p>

								<span className="text-[11px] text-primary">7:15 AM</span>
							</div>
						)}

						<div className="flex items-center justify-between gap-[5px] h-[20px]">
							<div className="flex flex-1 items-center justify-between overflow-hidden gap-[10px]">
								{showSpan ? (
									span && <p className="text-[gray] text-[12px]">{span}</p>
								) : (
									<>
										<p className="overflow-hidden text-[12px] w-[200px] text-[white] overflow-ellipsis whitespace-nowrap font-medium opacity-[.9] flex-shrink">
											{lastMsg}
										</p>

										<div className="flex items-center">
											{msgCount !== 0 && (
												<span className="px-[6px] py-[3px] font-medium rounded-[20px] text-[11px] text-darker bg-primary">
													{msgCount}
												</span>
											)}
										</div>
									</>
								)}
							</div>

							<div
								onClick={openMenu}
								id={`drop${id}`}
								className="w-0 opacity-0 transition-all duration-[.3s] hidden"
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
					</div>
				</div>
			</div>

			<MenuBox
				width="w-[200px]"
				height="h-[220px]"
				id={`Ch${id}`}
				links={[
					{ text: "Archive chat" },
					{ text: "Mute notifications" },
					{ text: "Exit group" },
					{ text: "Pin chats" },
					{ text: "Mark as read" },
				]}
			/>
		</div>
	);
}

export default ChatTile;
