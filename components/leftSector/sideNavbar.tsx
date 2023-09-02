import Image from "next/image";
import profile from "../../images/profile.png";
import { Groups, DataUsage, Chat, MoreVert } from "@mui/icons-material";
import IconBox from "../iconBox";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import MenuBox from "../menuBox";
import { addSubRoute, changeRoute } from "@/redux/reducers/routeSlice";
import { useDispatch } from "react-redux";
import { toggleSelection } from "@/redux/reducers/leftSectSlice";

function SideNavbar() {
	const dispatch = useDispatch();
	let [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const tileRefs: React.RefObject<HTMLDivElement>[] = Array(7)
		.fill(null)
		.map(() => createRef<HTMLDivElement>());

	const openMenu = useCallback(() => {
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
					}, 210);
				}, 200);
			}, 5);
		}
	}, [open, tileRefs]);

	const closeMenu = useCallback(
		(e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				!["menuSn", "menuTileSn"].includes(target.id) &&
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

	const openCommunity = () => {
		dispatch(addSubRoute("communities"));

		setTimeout(() => {
			const community = document.getElementById("community");

			community!.classList.replace("-translate-x-[100%]", "translate-x-0");
		}, 5);
	};

	const openNewChat = () => {
		dispatch(addSubRoute("newChat"));

		setTimeout(() => {
			const chat = document.getElementById("newChat");

			chat!.classList.replace("-translate-x-[100%]", "translate-x-0");
		}, 5);
	};

	const openSettings = () => {
		dispatch(addSubRoute("settings"));

		setTimeout(() => {
			const settings = document.getElementById("settings");

			settings!.classList.replace("-translate-x-[100%]", "translate-x-0");
		}, 5);
	};

	useEffect(() => {
		window.addEventListener("click", closeMenu);

		return () => window.removeEventListener("click", closeMenu);
	}, [closeMenu]);

	return (
		<nav className="h-[60px] bg-secondary flex items-center justify-between px-[20px]">
			<Image
				src={profile}
				alt={"profile"}
				height={40}
				width={40}
				className="rounded-[50%]"
			/>

			<div className="flex items-center gap-[5px] relative">
				<IconBox title="Communities" clicked={openCommunity}>
					<Groups sx={{ color: "lightgray", fontSize: "25px" }} />
				</IconBox>

				<IconBox title="Status" clicked={() => dispatch(changeRoute("status"))}>
					<DataUsage sx={{ color: "lightgray", fontSize: "21px" }} />
				</IconBox>

				<IconBox
					title="New Chat"
					clicked={openNewChat}
				>
					<Chat sx={{ color: "lightgray", fontSize: "21px" }} />
				</IconBox>

				<IconBox title="Menu" clicked={openMenu}>
					<MoreVert sx={{ color: "lightgray", fontSize: "24px" }} />
				</IconBox>

				<MenuBox
					width="w-[200px]"
					height="h-[300px]"
					origin="origin-top-right"
					id="Sn"
					links={[
						{ text: "New group" },
						{ text: "New community" },
						{ text: "Archived" },
						{ text: "Starred messages" },
						{ text: "Select chats", clicked: () => dispatch(toggleSelection(true)) },
						{ text: "Settings", clicked: openSettings },
						{ text: "Log out" },
					]}
					menuRef={menuRef}
					tileRefs={tileRefs}
				/>
			</div>
		</nav>
	);
}

export default SideNavbar;
