"use client";

import { Group, Groups } from "@mui/icons-material";
import ChatTile from "./chatTile";
import NewChatNav from "./newChatNav";
import SearchHeader from "./searchHeader";
import TileInfo from "./tileInfo";
import pic from "../images/profile.png";

function LeftNewChats() {
	return (
		<div className="w-full h-full">
			<NewChatNav text="New chat" />

			<div className="w-full h-[calc(100%-120px)] bg-darker">
				<SearchHeader showFilter={false} />

				<div className="h-[calc(100%-44px)] w-full overflow-auto">
					<div className="w-full flex flex-col items-start pb-[25px]">
						{[
							{ icon: Group, text: "New group" },
							{ icon: Groups, text: "New community" },
						].map((e, ind) => (
							<ChatTile
								key={ind}
								id={`${e}`}
								Icon={e.icon}
								text={e.text}
								showSpan={true}
							/>
						))}

						<TileInfo text="contacts on wazzapp" />
						<ChatTile
							pic={pic}
							text="(You)"
							span="Message yourself"
							showSpan={true}
						/>

						<TileInfo text="#" />
						<ChatTile
							pic={pic}
							text="0802 949 4195"
							span="Available"
							showSpan={true}
						/>
						<ChatTile
							pic={pic}
							text="0802 949 4195"
							span="Available"
							showSpan={true}
						/>

						<TileInfo text="A" />
						<ChatTile
							pic={pic}
							text="Al Alamin"
							span="Available"
							showSpan={true}
						/>
						<ChatTile
							pic={pic}
							text="Astrid Joe"
							span="Available"
							showSpan={true}
						/>

						<TileInfo text="B" />
						<ChatTile
							pic={pic}
							text="Beatrice Joy"
							span="Available"
							showSpan={true}
						/>
						<ChatTile pic={pic} text="Bello" span="Available" showSpan={true} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftNewChats;
