import { FilterList, Search, West } from "@mui/icons-material";
import { useRef, useState } from "react";

type Props = {
	showFilter?: boolean;
	holder: string;
	id: string;
};

function SearchHeader({ showFilter = true, holder, id }: Props) {
	const [filteron, setFilteron] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const filterRef = useRef<HTMLSpanElement>(null);

	const focused = () => {
		const search = document.getElementById(`searchIcon${id}`);
		const arrow = document.getElementById(`arrowIcon${id}`);

		search!.style.transform = "rotate(-180deg)";
		search!.style.opacity = "0";

		arrow!.style.transform = "rotate(0deg)";
		arrow!.style.opacity = "1";
	};

	const blurred = () => {
		const search = document.getElementById(`searchIcon${id}`);
		const arrow = document.getElementById(`arrowIcon${id}`);

		arrow!.style.transform = "rotate(180deg)";
		arrow!.style.opacity = "0";

		search!.style.transform = "rotate(0deg)";
		search!.style.opacity = "0.7";
	};

	const filter = () => {
		if (filteron) {
			filterRef.current!.classList.remove("bg-primaryDark");

			setFilteron(false);
		} else {
			filterRef.current!.classList.add("bg-primaryDark");

			setFilteron(true);
		}
	};

	return (
		<div className="px-[10px] py-[6px] flex gap-[10px] items-center">
			<div className="flex-1 h-[32px] rounded-[7px] bg-secondary flex items-center px-[20px] gap-[30px] relative">
				<Search
					id={`searchIcon${id}`}
					sx={{
						fontSize: "19px",
						color: "lightgray",
						opacity: ".7",
						transition: "all .3s linear",
					}}
				/>
				<West
					onClick={() => inputRef.current!.blur()}
					className="text-primary"
					id={`arrowIcon${id}`}
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
					ref={inputRef}
					type="text"
					className="flex-1 bg-[transparent] border-none outline-none leading-[2] placeholder:opacity-[.7] text-[13px] text-[lightgray]"
					placeholder={holder}
				/>
			</div>

			{showFilter && (
				<span
					onClick={filter}
					id="filter"
					ref={filterRef}
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
