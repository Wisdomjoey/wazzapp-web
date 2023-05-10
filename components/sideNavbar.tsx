import Image from "next/image";
import profile from "../images/profile.png";
import { Groups, DataUsage, Chat, MoreVert } from "@mui/icons-material";
import IconBox from "./iconBox";
import { useCallback, useEffect, useState } from "react";
import MenuBox from "./menuBox";
import { addSubRoute } from "@/redux/reducers/routeSlice";
import { useDispatch } from "react-redux";

function SideNavbar() {
	const dispatch = useDispatch();
	let [open, setopen] = useState(false);

	const openMenu = useCallback(() => {
		if (!open) {
			const menu = document.getElementById("menuSn");
			const tile = document.querySelectorAll("#tileSn");

			menu!.classList.replace("hidden", "flex");

			setTimeout(() => {
				menu!.classList.replace("scale-0", "scale-100");

				setTimeout(() => {
					tile.forEach((val) => {
						val.classList.replace("opacity-0", "opacity-100");
					});

					setTimeout(() => {
						setopen(true);
					}, 210);
				}, 200);
			}, 5);
		}
	}, [open]);

	const closeMenu = useCallback(
		(e: MouseEvent) => {
			const menu = document.getElementById("menuSn");
			const tile = document.querySelectorAll("#tileSn");
			const target = e.target as HTMLElement;

			if (!["menuSn", "menuTileSn"].includes(target.id) && open) {
				menu!.classList.replace("scale-100", "scale-0");

				setTimeout(() => {
					menu!.classList.replace("flex", "hidden");

					tile.forEach((val) => {
						val.classList.replace("opacity-100", "opacity-0");
					});

					setopen(false);
				}, 200);
			}
		},
		[open]
	);

	const openCommunity = () => {
		dispatch(addSubRoute("communities"));

		setTimeout(() => {
			const community = document.getElementById("community");

			community!.classList.replace("w-0", "w-full");
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

				<IconBox title="Status" clicked={() => dispatch(addSubRoute("status"))}>
					<DataUsage sx={{ color: "lightgray", fontSize: "21px" }} />
				</IconBox>

				<IconBox
					title="New Chat"
					clicked={() => dispatch(addSubRoute("newChat"))}
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
						{ text: "Select chats" },
						{ text: "Settings" },
						{ text: "Log out" },
					]}
				/>
			</div>
		</nav>
	);
}

export default SideNavbar;
