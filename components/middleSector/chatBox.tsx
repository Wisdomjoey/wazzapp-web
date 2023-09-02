import { Add, DoneAllRounded, EmojiEmotions } from "@mui/icons-material";
import {
	MouseEvent,
	createRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import MenuBox from "../menuBox";
import Image from "next/image";
import pic from "../../images/profile.png";
import b3 from "../../images/b3.jpg";

type Props = {
	id: number;
	sent: boolean;
};

function ChatBox({ id, sent }: Props) {
	const openRef = useRef(false);
	const openBRef = useRef(false);
	const emojiRef = useRef<HTMLDivElement>(null);
	const reactionRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const iconRef = useRef<HTMLDivElement>(null);
	const iconRefs = useRef([] as HTMLParagraphElement[]);
	const tileRefs: React.RefObject<HTMLDivElement>[] = Array(6)
		.fill(null)
		.map(() => createRef<HTMLDivElement>());

	const showIcon = () => {
		if (emojiRef.current !== null && !openRef.current) {
			emojiRef.current.classList.replace("hidden", "flex");
		}
	};

	const hideIcon = () => {
		if (emojiRef.current !== null && !openRef.current) {
			emojiRef.current.classList.replace("flex", "hidden");
		}
	};

	const openReaction = useCallback(() => {
		if (
			!openRef.current &&
			emojiRef.current !== null &&
			reactionRef.current !== null &&
			iconRef.current !== null
		) {
			reactionRef.current.classList.replace("hidden", "flex");
			emojiRef.current.style.display = "flex";

			setTimeout(() => {
				reactionRef.current!.classList.replace("w-0", "w-[284px]");

				setTimeout(() => {
					iconRefs.current.forEach((val) =>
						val.classList.replace("opacity-0", "opacity-100")
					);
					iconRef.current!.classList.replace("opacity-0", "opacity-100");

					setTimeout(() => {
						openRef.current = true;
					}, 180);
				}, 200);
			}, 5);
		}
	}, []);

	const closeReaction = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				![`reaction${id}`, `react${id}`].includes(target.id) &&
				openRef.current &&
				emojiRef.current !== null &&
				reactionRef.current !== null &&
				iconRef.current !== null
			) {
				reactionRef.current.classList.replace("w-[284px]", "w-0");

				setTimeout(() => {
					reactionRef.current!.classList.replace("flex", "hidden");
					emojiRef.current!.style.removeProperty("display");
					iconRefs.current.forEach((val) =>
						val.classList.replace("opacity-100", "opacity-0")
					);
					iconRef.current!.classList.replace("opacity-100", "opacity-0");

					setTimeout(() => {
						openRef.current = false;
					}, 180);
				}, 200);
			}
		},
		[id]
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
			if (!openBRef.current && arrowRef.current !== null && menuRef.current !== null) {
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
							openBRef.current = true;
						}, 180);
					}, 200);
				}, 5);
			}
		},
		[tileRefs]
	);

	const closeMenu = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				![`menuB${id}`, `menuTileB${id}`, `arrow${id}`].includes(target.id) &&
				openBRef.current &&
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

					openBRef.current = false;
				}, 200);
			}
		},
		[id, tileRefs]
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
			className={`flex items-center ${
				sent ? "justify-start flex-row" : "justify-end flex-row-reverse"
			} px-[50px] gap-[5px]`}
		>
			<div className="flex flex-col relative z-10">
				<div
					id={`reaction${id}`}
					ref={reactionRef}
					className="absolute w-0 -right-[132px] bottom-[30px] overflow-hidden hidden transition-all duration-200"
				>
					<div
						id={`react${id}`}
						className="flex items-center justify-between bg-secondary px-[8px] py-[10px] rounded-[30px] w-[284px] border border-[#ffffff0a]"
					>
						<div className="flex items-center gap-[3px]">
							{["👍", "❤️", "😂", "😯", "😢", "🙏"].map((val, ind) => {
								const delay = `${ind * 30}ms`;

								return (
									<p
										key={ind}
										ref={(value) => (iconRefs.current[ind] = value!)}
										style={{ transitionDelay: delay }}
										className="text-[26px] cursor-pointer opacity-0 duration-100"
									>
										{val}
									</p>
								);
							})}
						</div>

						<div
							ref={iconRef}
							className="w-[29px] h-[29px] rounded-[50%] bg-[#ffffff69] flex items-center justify-center cursor-pointer opacity-0 duration-100 delay-[180ms]"
						>
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
				className={`rounded-[5px] ${
					sent ? "bg-primaryDark" : "bg-secondary"
				} flex flex-col text-[white] text-[14px] relative`}
			>
				<div
					id={`arrow${id}`}
					ref={arrowRef}
					onClick={openMenu}
					className="absolute bg-[linear-gradient(225deg,_var(--tw-gradient-from),_var(--tw-gradient-stops))] from-secondary via-secondary rounded-[50%] opacity-0 z-[2] right-0 top-0 w-0 h-0 items-center justify-center cursor-pointer transition-all duration-200 hidden overflow-hidden"
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

				<div
					className={`w-[16px] h-[16px] absolute top-0 ${
						sent ? "right-[-8px]" : "left-[-8px]"
					} rounded-[4px] overflow-hidden`}
				>
					<svg
						viewBox="0 0 100 100"
						className={`${sent ? "fill-primaryDark" : "fill-secondary"}`}
					>
						<path d="M0 0 L100 0 L50 100 L0 0 Z"></path>
					</svg>
				</div>

				<div className={`${sent ? "p-[10px]" : "px-[10px] pt-[10px]"}`}>
					<p>
						<span className="text-primary font-medium">Hashira Hoshi</span>

						<span className="text-[11px] text-[lightgray] ml-[5px] font-light opacity-[.8]">
							+234 802 949 4195
						</span>
					</p>
				</div>

				{/* <div className="px-[4px] relative">
					<div className="rounded-[7px] bg-[#00000033] overflow-hidden cursor-pointer flex">
						<div className="p-[10px] flex-1 flex flex-col gap-[10px] justify-start border-l-[4px] border-solid border-primary">
							<p className="text-[cyan] font-medium">Jay Z</p>

							<p className="text-[15px] opacity-[.8]">{`${openB}`}</p>
						</div>

						<div className="w-[60px]">
							<Image alt={"photo"} src={b3} className="h-full object-cover" />
						</div>
					</div>
				</div> */}

				<div className="flex items-center justify-between gap-[10px] py-[5px] px-[10px]">
					<p className="text-[15px] my-[5px]">{`${openRef.current}`}</p>

					<div className="flex items-end gap-[5px] self-end">
						<span className="text-[11px] opacity-[.8]">8:55 PM</span>

						{sent && (
							<DoneAllRounded sx={{ fontSize: "16px", color: "cyan" }} />
						)}
					</div>
				</div>
			</div>

			{!sent && (
				<div className="mr-[5px] self-start">
					<Image
						alt={"Profile pic"}
						src={pic}
						width={28}
						height={28}
						className="rounded-[50%]"
					/>
				</div>
			)}

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
