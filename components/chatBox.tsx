import { Add, DoneAllRounded, EmojiEmotions } from "@mui/icons-material";
import {
	MouseEvent,
	createRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import MenuBox from "./menuBox";

type Props = {
	id: number;
};

function ChatBox({ id }: Props) {
	const [open, setOpen] = useState(false);
	const [openB, setOpenB] = useState(false);
	const emojiRef = useRef<HTMLDivElement>(null);
	const reactionRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const tileRefs: React.RefObject<HTMLDivElement>[] = Array(6)
		.fill(null)
		.map(() => createRef<HTMLDivElement>());

	const showIcon = () => {
		if (emojiRef.current !== null) {
			emojiRef.current.classList.replace("hidden", "flex");
		}
	};

	const hideIcon = () => {
		if (emojiRef.current !== null) {
			emojiRef.current.classList.replace("flex", "hidden");
		}
	};

	const openReaction = useCallback(() => {
		if (!open && emojiRef.current !== null && reactionRef.current !== null) {
			reactionRef.current.classList.replace("hidden", "flex");
			emojiRef.current.style.display = "flex";

			setTimeout(() => {
				reactionRef.current!.classList.replace("w-0", "w-[284px]");

				setOpen(true);
			}, 5);
		}
	}, [open]);

	const closeReaction = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				![`reaction${id}`, `react${id}`].includes(target.id) &&
				open &&
				emojiRef.current !== null &&
				reactionRef.current !== null
			) {
				reactionRef.current.classList.replace("w-[284px]", "w-0");

				setTimeout(() => {
					reactionRef.current!.classList.replace("hidden", "flex");
					emojiRef.current!.style.removeProperty("display");
				}, 200);

				setOpen(false);
			}
		},
		[id, open]
	);

	const showArrow = () => {
		if (arrowRef.current !== null) {
			arrowRef.current.classList.replace("hidden", "flex");

			setTimeout(() => {
				arrowRef.current!.classList.replace("w-0", "w-[30px]");
				arrowRef.current!.classList.replace("h-0", "h-[30px]");
				arrowRef.current!.classList.replace("opacity-0", "opacity-100");
			}, 5);
		}
	};

	const hideArrow = () => {
		if (arrowRef.current !== null) {
			arrowRef.current.classList.replace("w-[30px]", "w-0");
			arrowRef.current.classList.replace("h-[30px]", "h-0");
			arrowRef.current.classList.replace("opacity-100", "opacity-0");

			setTimeout(() => {
				arrowRef.current!.classList.replace("flex", "hidden");
			}, 200);
		}
	};

	const openMenu = useCallback(
		(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
			if (!openB && arrowRef.current !== null && menuRef.current !== null) {
				menuRef.current.classList.replace("hidden", "flex");
				arrowRef.current.style.display = "flex";
				menuRef.current.style.right = `${window.innerWidth - e.clientX}px`;
				menuRef.current.style.left = "revert";

				if (window.innerHeight - e.clientY < 260) {
					menuRef.current.style.bottom = `${
						window.innerHeight - e.clientY + 5
					}px`;
					menuRef.current.style.top = "revert";
					menuRef.current.classList.add("origin-bottom-right");
				} else {
					menuRef.current.style.top = `${e.clientY + 5}px`;
					menuRef.current.style.bottom = "revert";
					menuRef.current.classList.add("origin-top-right");
				}

				setTimeout(() => {
					menuRef.current!.classList.replace("scale-0", "scale-100");

					setTimeout(() => {
						tileRefs.forEach((val) => {
							if (val.current !== null) {
								val.current.classList.replace("opacity-0", "opacity-100");
							}
						});

						setTimeout(() => {
							setOpenB(true);
						}, 180);
					}, 200);
				}, 5);
			}
		},
		[openB, tileRefs]
	);

	const closeMenu = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				![`menuB${id}`, `menuTileB${id}`, `arrow${id}`].includes(target.id) &&
				openB &&
				arrowRef.current !== null &&
				menuRef.current !== null
			) {
				menuRef.current.classList.replace("scale-100", "scale-0");

				setTimeout(() => {
					tileRefs.forEach((val) => {
						if (val.current !== null) {
							val.current.classList.replace("opacity-100", "opacity-0");
						}
					});

					arrowRef.current!.style.removeProperty("display");
					menuRef.current!.classList.replace("flex", "hidden");
					menuRef.current!.classList.remove("origin-top-right");
					menuRef.current!.classList.remove("origin-bottom-right");

					setOpenB(false);
				}, 200);
			}
		},
		[id, openB, tileRefs]
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
					ref={reactionRef}
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
					ref={emojiRef}
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
					ref={arrowRef}
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

						<p className="text-[12px] text-[white] opacity-[.8]">{`${openB}`}</p>
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
				menuRef={menuRef}
				tileRefs={tileRefs}
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
