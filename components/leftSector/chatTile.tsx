import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Image, { StaticImageData } from "next/image";
import {
	MouseEvent,
	useCallback,
	useEffect,
	useState,
	useRef,
} from "react";

type Props = {
	id?: number;
	text?: string;
	name?: string;
	lastMsg?: string;
	msgCount?: number;
	span?: string;
	pic?: StaticImageData;
	showSpan?: boolean;
	tileRefs: React.RefObject<HTMLDivElement>[];
	menuRef: React.RefObject<HTMLDivElement>;
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
	tileRefs,
	menuRef,
	clicked,
}: Props) {
	const [open, setOpen] = useState(false);
	const dropRef = useRef<HTMLDivElement>(null);

	const showIcon = () => {
		if (dropRef.current !== null) {
			dropRef.current.classList.replace("hidden", "flex");

			setTimeout(() => {
				dropRef.current!.classList.replace("w-0", "w-[20px]");
				dropRef.current!.classList.replace("opacity-0", "opacity-70");
			}, 5);
		}
	};

	const hideIcon = () => {
		if (dropRef.current !== null) {
			dropRef.current.classList.replace("w-[20px]", "w-0");
			dropRef.current.classList.replace("opacity-70", "opacity-0");

			setTimeout(() => {
				dropRef.current!.classList.replace("flex", "hidden");
			}, 300);
		}
	};

	const openMenu = useCallback(
		(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
			e.preventDefault();
console.log(menuRef)
console.log(tileRefs)
			if (!open && menuRef.current !== null) {
				menuRef.current.classList.replace("hidden", "flex");
				menuRef.current.style.left = `${e.clientX}px`;
				menuRef.current.style.right = "revert";

				if (window.innerHeight - e.clientY < 220) {
					menuRef.current.style.bottom = `${window.innerHeight - e.clientY}px`;
					menuRef.current.style.top = "revert";
					menuRef.current.classList.add("origin-bottom-left");
				} else {
					menuRef.current.style.top = `${e.clientY}px`;
					menuRef.current.style.bottom = "revert";
					menuRef.current.classList.add("origin-top-left");
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
							setOpen(true);
						}, 150);
					}, 200);
				}, 5);
			}
		},
		[menuRef, open, tileRefs]
	);

	const closeMenu = useCallback(
		(e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				![`menuCh${id}`, `menuTileCh${id}`].includes(target.id) &&
				open &&
				menuRef.current !== null
			) {
				menuRef.current.classList.replace("scale-100", "scale-0");

				setTimeout(() => {
					menuRef.current!.classList.replace("flex", "hidden");
					menuRef.current!.classList.remove("origin-top-left");
					menuRef.current!.classList.remove("origin-bottom-left");

					tileRefs.forEach((val) => {
						if (val.current !== null) {
							val.current.classList.replace("opacity-100", "opacity-0");
						}
					});

					setOpen(false);
				}, 200);
			}
		},
		[id, menuRef, open, tileRefs]
	);

	useEffect(() => {
		window.addEventListener("click", closeMenu);

		return () => window.removeEventListener("click", closeMenu);
	}, [closeMenu]);

	return (
		<div className="w-full">
			<div
				onClick={clicked}
				onContextMenu={openMenu}
				className="flex items-center gap-[15px] pl-[15px] cursor-pointer"
				onMouseOver={showSpan ? undefined : showIcon}
				onMouseLeave={showSpan ? undefined : hideIcon}
			>
				{Icon ? (
					<div className="rounded-[50%] w-[50px] h-[50px] bg-primary flex items-center justify-center">
						<Icon sx={{ color: "#5C5C5B", fontSize: "25px" }} />
					</div>
				) : (
					<Image
						src={pic!}
						alt={"pic"}
						height={50}
						width={50}
						className="rounded-[50%]"
					/>
				)}

				<div className="overflow-hidden border-b border-solid border-secondary h-[73px] w-full">
					<div className="flex flex-col pr-[15px] h-full justify-center">
						<div>
							{text ? (
								<span className="text-[16px] text-[white] font-normal">
									{text}
								</span>
							) : (
								<div className="flex items-end justify-between gap-[5px] mb-[5px]">
									<p className="text-[18px] text-[white] font-semibold whitespace-nowrap overflow-hidden text-ellipsis flex-1">
										{name}
									</p>

									<span className="text-[12px] text-primary font-medium">
										7:15 AM
									</span>
								</div>
							)}

							<div className="flex items-center justify-between gap-[5px] h-[20px]">
								<div className="flex flex-1 items-center justify-between overflow-hidden gap-[10px]">
									{showSpan ? (
										span && <p className="text-[gray] text-[12px]">{span}</p>
									) : (
										<>
											<p className="overflow-hidden text-[14px] text-[white] overflow-ellipsis whitespace-nowrap font-medium opacity-[.85]">
												{lastMsg}
											</p>

											<div className="flex items-center gap-[5px]">
												{msgCount !== 0 && (
													<span className="px-[.25rem] pb-[.13rem] min-w-[1.34rem] min-h-[1.32rem] font-medium rounded-[50%] text-[13px] flex items-center justify-center text-darker bg-primary">
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
									ref={dropRef}
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
			</div>
		</div>
	);
}

export default ChatTile;
