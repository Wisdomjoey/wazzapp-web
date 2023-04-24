"use client";

import { FilterList, Search, West } from "@mui/icons-material";
import { useState } from "react";

type Props = {
	showFilter?: boolean;
};

function SearchHeader({ showFilter = true }: Props) {
	const [filteron, setfilteron] = useState(false);

	const focused = () => {
		const search = document.getElementById("searchIcon");
		const arrow = document.getElementById("arrowIcon");

		search!.style.transform = "rotate(-180deg)";
		search!.style.opacity = "0";

		arrow!.style.transform = "rotate(0deg)";
		arrow!.style.opacity = "1";
	};

	const blurred = () => {
		const search = document.getElementById("searchIcon");
		const arrow = document.getElementById("arrowIcon");

		arrow!.style.transform = "rotate(180deg)";
		arrow!.style.opacity = "0";

		search!.style.transform = "rotate(0deg)";
		search!.style.opacity = "0.7";
	};

	const unfocus = () => {
		const input = document.getElementById("input");

		input?.blur();
	};

	const filter = () => {
		const icon = document.getElementById("filter");

		if (filteron) {
			icon?.classList.remove("bg-primaryDark");

			setfilteron(false);
		} else {
			icon?.classList.add("bg-primaryDark");

			setfilteron(true);
		}
	};

	return (
		<div className="w-full px-[10px] py-[6px] flex gap-[10px] items-center">
			<div className="flex-1 h-[32px] rounded-[7px] bg-secondary flex items-center px-[20px] gap-[30px] relative">
				<Search
					id="searchIcon"
					sx={{
						fontSize: "19px",
						color: "lightgray",
						opacity: ".7",
						transition: "all .3s linear",
					}}
				/>
				<West
					onClick={unfocus}
					className="text-primary"
					id="arrowIcon"
					sx={{
						fontSize: "20px",
						position: "absolute",
						transform: "rotate(180deg)",
						opacity: 0,
						transition: "all .3s linear",
						cursor: "pointer",
					}}
				/>

				<input
					onFocus={focused}
					onBlur={blurred}
					id="input"
					type="text"
					className="flex-1 bg-[transparent] border-none outline-none leading-[2] placeholder:opacity-[.7] text-[13px] text-[lightgray]"
					placeholder="Search or start new chat"
				/>
			</div>

			{showFilter && (
				<span
					onClick={filter}
					id="filter"
					className="w-[25px] h-[25px] rounded-[50%] cursor-pointer flex items-center justify-center"
				>
					<FilterList
						sx={{
							color: filteron ? "white" : "lightgray",
							fontSize: "21px",
							opacity: ".7",
						}}
					/>
				</span>
			)}
		</div>
	);
}

export default SearchHeader;
