"use client";

import Image from "next/image";
import profile from "../images/profile.png";
import { Groups, DataUsage, Chat, MoreVert } from "@mui/icons-material";
import IconBox from "./iconBox";
import MenuTile from "./menuTile";
import { useEffect, useState } from "react";

function SideNavbar() {
	const [open, setopen] = useState(false);

	const openMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const menu = document.getElementById("menu");
		const tile = document.getElementById("menuTile");

		if (!open) {
			menu!.style.width = "200px";
			menu!.style.height = "auto";

			setTimeout(() => {
				tile!.style.opacity = "1";
			}, 84);

			setopen(true);
		} else {
			tile!.style.opacity = "0";
			menu!.style.width = "0px";
			menu!.style.height = "0px";

			setopen(false);
		}
	};

	const closeMenu = (e: MouseEvent) => {
		const menu = document.getElementById("menu");
		const tile = document.getElementById("menuTile");
		const target = e.target as HTMLElement;

		if (
			!["menu", "menuTile", "tile", "menuText", "icon"].includes(target.id) &&
			target.tagName !== "svg" &&
			target.tagName !== "path"
		) {
			tile!.style.opacity = "0";
			menu!.style.width = "0px";
			menu!.style.height = "0px";

			setopen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", closeMenu);

		return () => window.removeEventListener("click", closeMenu);
	}, []);

	return (
		<nav className="w-full h-[60px] bg-secondary flex items-center justify-between px-[20px]">
			<Image
				src={profile}
				alt={"profile"}
				height={40}
				width={40}
				className="rounded-[50%]"
			/>

			<div className="flex items-center gap-[5px] relative">
				<IconBox title="Communities">
					<Groups sx={{ color: "lightgray", fontSize: "25px" }} />
				</IconBox>

				<IconBox title="Status">
					<DataUsage sx={{ color: "lightgray", fontSize: "22px" }} />
				</IconBox>

				<IconBox title="New Chat">
					<Chat sx={{ color: "lightgray", fontSize: "22px" }} />
				</IconBox>

				<IconBox title="Menu" clicked={openMenu}>
					<MoreVert sx={{ color: "lightgray", fontSize: "25px" }} />
				</IconBox>

				<div
					id="menu"
					className="absolute right-0 top-[45px] w-[0px] h-[0px] py-[10px] bg-secondary shadow-shadow z-10 rounded-[4px] [transition:width_0.084s,height_0.05s] ease-out"
				>
					<div id="menuTile" className="opacity-0 flex flex-col w-full">
						{[
							"New group",
							"New community",
							"Archived",
							"Starred messages",
							"Select chats",
							"Settings",
							"Log out",
						].map((e, ind) => (
							<MenuTile key={ind} text={e} />
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default SideNavbar;
