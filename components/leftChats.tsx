import ChatTile from "./chatTile";
import SearchHeader from "./searchHeader";
import SideNavbar from "./sideNavbar";
import pic from "../images/profile.png";

function LeftChats() {
	return (
		<div className="h-full w-full flex flex-col">
			<SideNavbar />

			<div className="w-full bg-darker h-[calc(100%-60px)] flex flex-col">
				<SearchHeader />

				<div className="h-[calc(100%-44px)] w-full overflow-auto">
					<div className="w-full flex flex-col items-start pb-[25px]">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e) => (
							<ChatTile key={e} id={`${e}`} pic={pic} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftChats;
