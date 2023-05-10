import Image from "next/image";
import profile from "../images/profile.png";
import { MoreVert, Search } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import IconBox from "./iconBox";
import MenuBox from "./menuBox";
import { useDispatch, useSelector } from "react-redux";
import { changeSect } from "@/redux/reducers/routeSlice";

function ChatNavbar() {
	const routes = useSelector((state) => (state as any).routes);
	const dispatch = useDispatch();
	const [open, setopen] = useState(false);

	const openMenu = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (!open) {
				const menu = document.getElementById("menuIn");
				const tile = document.querySelectorAll("#tileIn");

				menu!.classList.replace("hidden", "flex");

				setTimeout(() => {
					menu!.classList.replace("scale-0", "scale-100");

					setTimeout(() => {
						tile.forEach((val) => {
							val.classList.replace("opacity-0", "opacity-100");
						});

						setTimeout(() => {
							setopen(true);
						}, 270);
					}, 200);
				}, 5);
			}
		},
		[open]
	);

	const closeMenu = useCallback(
		(e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (!["menuIn", "menuTileIn"].includes(target.id) && open) {
				const menu = document.getElementById("menuIn");
				const tile = document.querySelectorAll("#tileIn");

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
				className="flex gap-[20px] items-center justify-start flex-1 cursor-pointer"
			>
				<Image
					src={profile}
					alt={"profile"}
					height={40}
					width={40}
					className="rounded-[50%]"
				/>

				<span className="font-semibold text-[15px] text-[white]">Jay Z</span>
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
						{ text: "Contact info" },
						{ text: "Select messages" },
						{ text: "Close chat" },
						{ text: "Mute notifications" },
						{ text: "Dissappering messages" },
						{ text: "Clear messages" },
						{ text: "Delete chat" },
						{ text: "Report" },
						{ text: "Block" },
					]}
				/>
			</div>
		</nav>
	);
}

export default ChatNavbar;
