import Image from "next/image";
import profile from "../../images/profile.png";
import { MoreVert, Search } from "@mui/icons-material";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import IconBox from "../iconBox";
import MenuBox from "../menuBox";
import { useDispatch, useSelector } from "react-redux";
import {
	addSubRoute,
	changeSect,
	removeSubRoute,
} from "@/redux/reducers/routeSlice";
import { toggleSelection } from "@/redux/reducers/middleSectSlice";
import MutePopup from "../popups/mutePopup";
import ClearPopup from "../popups/clearPopup";
import ReportPopup from "../popups/reportPopup";
import BlockPopup from "../popups/blockPopup";

function ChatNavbar() {
	const routes = useSelector((state) => (state as any).routes);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [popup, setPopup] = useState<string>("");
	const [muted, setMuted] = useState(false);
	const popupRef = useRef<HTMLDivElement>(null);
	const popupRefCon = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const tileRefs: React.RefObject<HTMLDivElement>[] = Array(9)
		.fill(null)
		.map(() => createRef<HTMLDivElement>());

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

	const openMenu = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (!open && menuRef.current !== null) {
				menuRef.current.classList.replace("hidden", "flex");

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
						}, 270);
					}, 200);
				}, 5);
			}
		},
		[open, tileRefs]
	);

	const closeMenu = useCallback(
		(e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				!["menuIn", "menuTileIn"].includes(target.id) &&
				open &&
				menuRef.current !== null
			) {
				menuRef.current.classList.replace("scale-100", "scale-0");

				setTimeout(() => {
					menuRef.current!.classList.replace("flex", "hidden");

					tileRefs.forEach((val) => {
						if (val.current !== null) {
							val.current.classList.replace("opacity-100", "opacity-0");
						}
					});

					setOpen(false);
				}, 200);
			}
		},
		[open, tileRefs]
	);

	const closeChat = () => {
		dispatch(removeSubRoute("chat"));
		dispatch(addSubRoute("intro"));
	};

	const closeSideSect = () => {
		dispatch(changeSect(""));

		const sideSect = document.getElementById("sideSect");
		const contact = document.getElementById("contact");
		const search = document.getElementById("searchMsg");

		switch (routes.sideSect) {
			case "contactInfo":
				contact!.classList.replace("opacity-100", "opacity-0");
				break;

			case "searchMsgs":
				search!.classList.replace("opacity-100", "opacity-0");
				break;

			default:
				break;
		}

		setTimeout(() => {
			sideSect!.classList.replace("basis-[30%]", "basis-0");
		}, 100);
	};

	const openSideSect = (section: string, id: string) => {
		const side = routes.sideSect;

		if (routes.sidesect !== section) {
			if (side !== "") {
				const contact = document.getElementById("contact");
				const search = document.getElementById("searchMsg");

				switch (side) {
					case "contactInfo":
						contact!.classList.replace("opacity-100", "opacity-0");
						break;

					case "searchMsgs":
						search!.classList.replace("opacity-100", "opacity-0");
						break;

					default:
						break;
				}

				dispatch(changeSect(section));

				setTimeout(() => {
					const ele = document.getElementById(id);

					ele!.classList.replace("opacity-0", "opacity-100");
				}, 5);
			} else {
				dispatch(changeSect(section));

				setTimeout(() => {
					const sideSect = document.getElementById("sideSect");
					const ele = document.getElementById(id);

					sideSect!.classList.replace("basis-0", "basis-[30%]");

					setTimeout(() => {
						ele!.classList.replace("opacity-0", "opacity-100");
					}, 200);
				}, 5);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("click", closeMenu);

		return () => window.removeEventListener("click", closeMenu);
	}, [closeMenu]);

	return (
		<nav className="w-full h-[60px] bg-secondary flex items-center justify-between px-[20px] gap-[20px]">
			<div
				onClick={() => openSideSect("contactInfo", "contact")}
				className="flex gap-[20px] items-center justify-start flex-1 cursor-pointer overflow-hidden"
			>
				<Image
					src={profile}
					alt={"profile"}
					height={40}
					width={40}
					className="rounded-[50%]"
				/>

				<div className="w-full overflow-hidden">
					<span className="font-semibold text-[15px] text-[white] whitespace-nowrap text-ellipsis overflow-hidden block">
						Jay Z
					</span>
				</div>
			</div>

			<div className="flex items-center gap-[10px] relative">
				<IconBox
					title="Search"
					clicked={() => openSideSect("searchMsgs", "searchMsg")}
				>
					<Search
						id="searchIcon"
						sx={{ color: "lightgray", fontSize: "25px" }}
					/>
				</IconBox>

				<IconBox title="Menu" clicked={openMenu}>
					<MoreVert sx={{ color: "lightgray", fontSize: "25px" }} />
				</IconBox>

				<MenuBox
					width="w-[200px]"
					height="h-[380px]"
					origin="origin-top-right"
					id="In"
					links={[
						{
							text: "Contact info",
							clicked: () => openSideSect("contactInfo", "contact"),
						},
						{
							text: "Select messages",
							clicked: () => dispatch(toggleSelection(true)),
						},
						{
							text: "Close chat",
							clicked: () => {
								closeChat();
								closeSideSect();
							},
						},
						{ text: "Mute notifications", clicked: () => openPopup("mute") },
						{ text: "Dissappering messages" },
						{ text: "Clear messages", clicked: () => openPopup("clear") },
						{ text: "Delete chat" },
						{ text: "Report", clicked: () => openPopup("report") },
						{ text: "Block", clicked: () => openPopup("block") },
					]}
					menuRef={menuRef}
					tileRefs={tileRefs}
				/>
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

			{popup === "clear" && (
				<ClearPopup
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
		</nav>
	);
}

export default ChatNavbar;
