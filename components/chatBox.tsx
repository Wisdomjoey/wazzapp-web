import { Add, DoneAllRounded, EmojiEmotions } from "@mui/icons-material";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import MenuTile from "./menuTile";
import MenuBox from "./menuBox";

type Props = {
	id: number;
};

function ChatBox({ id }: Props) {
	const [open, setopen] = useState(false);
	const [openB, setopenB] = useState(false);

	const showIcon = () => {
		const iconR = document.getElementById(`iconR${id}`);

		iconR!.classList.replace("hidden", "flex");
	};

	const hideIcon = () => {
		const iconR = document.getElementById(`iconR${id}`);

		iconR!.classList.replace("flex", "hidden");
	};

	const openReaction = useCallback(() => {
		if (!open) {
			const reaction = document.getElementById(`reaction${id}`);
			const iconR = document.getElementById(`iconR${id}`);

			reaction!.classList.replace("hidden", "flex");
			iconR!.style.display = "flex";

			setTimeout(() => {
				reaction!.classList.replace("w-0", "w-[284px]");

				setopen(true);
			}, 5);
		}
	}, [id, open]);

	const closeReaction = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;

			if (![`reaction${id}`, `react${id}`].includes(target.id) && open) {
				const reaction = document.getElementById(`reaction${id}`);
				const iconR = document.getElementById(`iconR${id}`);

				reaction!.classList.replace("w-[284px]", "w-0");

				setTimeout(() => {
					reaction!.classList.replace("hidden", "flex");
					iconR!.style.removeProperty("display");
				}, 200);

				setopen(false);
			}
		},
		[id, open]
	);

	const showArrow = () => {
		const arrow = document.getElementById(`arrow${id}`);

		arrow!.classList.replace("hidden", "flex");

		setTimeout(() => {
			arrow!.classList.replace("w-0", "w-[30px]");
			arrow!.classList.replace("h-0", "h-[30px]");
			arrow!.classList.replace("opacity-0", "opacity-100");
		}, 5);
	};

	const hideArrow = () => {
		const arrow = document.getElementById(`arrow${id}`);

		arrow!.classList.replace("w-[30px]", "w-0");
		arrow!.classList.replace("h-[30px]", "h-0");
		arrow!.classList.replace("opacity-100", "opacity-0");

		setTimeout(() => {
			arrow!.classList.replace("flex", "hidden");
		}, 200);
	};

	const openMenu = useCallback(
		(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
			if (!openB) {
				const menu = document.getElementById(`menuB${id}`);
				const tile = document.querySelectorAll(`#tileB${id}`);
				const arrow = document.getElementById(`arrow${id}`);

				menu!.classList.replace("hidden", "flex");
				arrow!.style.display = "flex";
				menu!.style.right = `${window.innerWidth - e.clientX}px`;
				menu!.style.left = "revert";

				if (window.innerHeight - e.clientY < 260) {
					menu!.style.bottom = `${window.innerHeight - e.clientY + 5}px`;
					menu!.style.top = "revert";
					menu!.classList.add("origin-bottom-right");
				} else {
					menu!.style.top = `${e.clientY + 5}px`;
					menu!.style.bottom = "revert";
					menu!.classList.add("origin-top-right");
				}

				setTimeout(() => {
					menu!.classList.replace("scale-0", "scale-100");

					setTimeout(() => {
						tile.forEach((val) => {
							val.classList.replace("opacity-0", "opacity-100");
						});

						setTimeout(() => {
							setopenB(true);
						}, 180);
					}, 200);
				}, 5);
			}
		},
		[id, openB]
	);

	const closeMenu = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;
console.log(open)
			if (
				![`menuB${id}`, `menuTileB${id}`, `arrow${id}`].includes(target.id) &&
				openB
			) {
				const menu = document.getElementById(`menuB${id}`);
				const tile = document.querySelectorAll(`#tileB${id}`);
				const arrow = document.getElementById(`arrow${id}`);

				menu!.classList.replace("scale-100", "scale-0");

				setTimeout(() => {
					tile.forEach((val) => {
						val.classList.replace("opacity-100", "opacity-0");
					});

					arrow!.style.removeProperty("display");
					menu!.classList.replace("flex", "hidden");
					menu!.classList.remove("origin-top-right");
					menu!.classList.remove("origin-bottom-right");

					setopenB(false);
				}, 200);
			}
		},
		[id, openB]
	);

	useEffect(() => {
		window.addEventListener("click", (e) => {
			closeReaction(e);
			closeMenu(e);
		});

		return () => {
			window.removeEventListener("click", (e) => {
				closeReaction(e);
				closeMenu(e);
			});
		};
	}, [closeMenu, closeReaction]);

	return (
		<div
			onMouseOver={showIcon}
			onMouseLeave={hideIcon}
			className="flex items-center justify-end px-[50px] gap-[5px]"
		>
			<div className="flex flex-col relative z-10">
				<div
					id={`reaction${id}`}
					className="absolute w-0 -right-[132px] bottom-[30px] overflow-hidden hidden transition-all duration-100"
				>
					<div
						id={`react${id}`}
						className="flex items-center justify-between bg-secondary px-[8px] py-[10px] rounded-[30px] w-[284px]"
					>
						<div className="flex items-center gap-[3px]">
							{["👍", "❤️", "😂", "😯", "😢", "🙏"].map((val, ind) => (
								<p key={ind} className="text-[26px] cursor-pointer">
									{val}
								</p>
							))}
						</div>

						<div className="w-[29px] h-[29px] rounded-[50%] bg-[#ffffff69] flex items-center justify-center cursor-pointer">
							<Add className="text-secondary" sx={{ fontSize: "25px" }} />
						</div>
					</div>
				</div>

				<div
					id={`iconR${id}`}
					onClick={openReaction}
					className="w-[21px] h-[21px] rounded-[50%] bg-[#000000b6] hidden items-center justify-center cursor-pointer"
				>
					<EmojiEmotions sx={{ color: "gray", fontSize: "15px" }} />
				</div>
			</div>

			<div
				onMouseOver={showArrow}
				onMouseLeave={hideArrow}
				className="rounded-[5px] bg-primaryDark flex flex-col relative"
			>
				<div
					id={`arrow${id}`}
					onClick={openMenu}
					className="absolute opacity-0 z-[2] right-0 top-0 w-0 h-0 items-center justify-center cursor-pointer transition-all duration-200 hidden overflow-hidden"
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

				<div className="px-[3px] pt-[3px] cursor-pointer">
					<div className="p-[10px] flex flex-col gap-[10px] justify-start rounded-[5px] bg-[#00000033] border-l-[4px] border-solid border-primary">
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

			<MenuBox
				width="w-[180px]"
				height="h-[260px]"
				id={`B${id}`}
				links={[
					{ text: "Message info" },
					{ text: "Reply" },
					{ text: "React to message" },
					{ text: "Forward message" },
					{ text: "Star message" },
					{ text: "Delete message" },
				]}
			/>
		</div>
	);
}

export default ChatBox;
