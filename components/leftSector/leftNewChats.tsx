"use client";

import { Group, Groups } from "@mui/icons-material";
import NewChatNav from "./newChatNav";
import SearchHeader from "../searchHeader";
import TileInfo from "../tileInfo";
import pic from "../../images/profile.png";
import Tile from "../tile";
import Image from "next/image";
import { removeSubRoute } from "@/redux/reducers/routeSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function LeftNewChats() {
	const dispatch = useDispatch();
	const newChatRef = useRef<HTMLDivElement>(null);

	const closeNewChat = () => {
		if (newChatRef.current !== null) {
			newChatRef.current.classList.replace(
				"translate-x-0",
				"-translate-x-[100%]"
			);

			setTimeout(() => {
				dispatch(removeSubRoute("newChat"));
			}, 200);
		}
	};

	return (
		<div
			id="newChat"
			ref={newChatRef}
			className="overflow-hidden w-full h-full transition-all -translate-x-[100%] duration-200 absolute top-0 left-0 z-[1]"
		>
			<NewChatNav text="New chat" clicked={closeNewChat} />

			<div className="h-[calc(100%-120px)] bg-darker">
				<SearchHeader showFilter={false} holder={"Search contacts"} id={"nc"} />

				<div className="h-[calc(100%-44px)] overflow-y-auto">
					<div className="flex flex-col items-start pb-[25px]">
						{[
							{ icon: Group, text: "New group" },
							{ icon: Groups, text: "New community" },
						].map((e, ind) => {
							const Icon = e.icon;

							return (
								<Tile
									key={ind}
									title={e.text}
									titleSize="18px"
									height="73px"
									profile={
										<div className="rounded-[50%] w-[50px] h-[50px] bg-primary flex items-center justify-center">
											<Icon sx={{ color: "#8f8f8f", fontSize: "27px" }} />
										</div>
									}
								/>
							);
						})}

						<TileInfo text="contacts on wazzapp" textSize='16px' />
						<Tile
							titleSize="18px"
							title="(You)"
							text="Message yourself"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>

						<TileInfo text="#" />
						<Tile
							titleSize="18px"
							title="0802 949 4195"
							text="Available"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>
						<Tile
							titleSize="18px"
							title="0802 949 4195"
							text="Available"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>

						<TileInfo text="A" />
						<Tile
							titleSize="18px"
							title="Al Alamin"
							text="Available"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>
						<Tile
							titleSize="18px"
							title="Astrid Joe"
							text="Available"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>

						<TileInfo text="B" />
						<Tile
							titleSize="18px"
							title="Beatrice Joy"
							text="Available"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>
						<Tile
							title="Bello"
							text="Available"
							titleSize="18px"
							height="73px"
							profile={
								<Image
									src={pic}
									alt={"pic"}
									height={50}
									width={50}
									className="rounded-[50%]"
								/>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftNewChats;
