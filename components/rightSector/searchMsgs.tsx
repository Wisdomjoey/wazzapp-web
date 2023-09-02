import SearchHeader from "../searchHeader";
import SectNavbar from "./sectNavbar";

function SearchMsgs() {
	return (
		<div
			id="searchMsg"
			className="h-full flex flex-col border-l-[1px] border-solid border-l-secondaryBorder opacity-0 transition-all duration-100"
		>
			<SectNavbar title={"Search Messages"} />

			<div className="bg-darker h-[calc(100%-60px)] flex flex-col overflow-auto">
				<SearchHeader showFilter={false} holder="Search..." id="msg" />
			</div>
		</div>
	);
}

export default SearchMsgs;
