import { removeSubRoute } from "@/redux/reducers/routeSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import NewChatNav from "./newChatNav";
import SearchHeader from "../searchHeader";
import { Person } from "@mui/icons-material";
import { settingsTile } from "@/utils/data";
import Tile from "../tile";

function LeftSettings() {
	const dispatch = useDispatch();
	const settingsRef = useRef<HTMLDivElement>(null);

	const closeSettings = () => {
		if (settingsRef.current !== null) {
			settingsRef.current.classList.replace(
				"translate-x-0",
				"-translate-x-[100%]"
			);

			setTimeout(() => {
				dispatch(removeSubRoute("settings"));
			}, 200);
		}
	};

	return (
		<div
			id="settings"
			ref={settingsRef}
			className="overflow-hidden w-full h-full transition-all -translate-x-[100%] duration-200 absolute top-0 left-0 z-[1]"
		>
			<NewChatNav text="Settings" clicked={closeSettings} />

			<div className="h-[calc(100%-120px)] bg-darker flex flex-col items-center overflow-y-auto">
				<SearchHeader holder="Search settings" id="st" showFilter={false} />

				<div className="py-[10px] w-full">
					<div className="px-[20px] py-[15px] flex items-center gap-[20px] hover:bg-[#ffffff1a]">
						<div className="w-[85px] h-[85px] rounded-[50%] bg-[gray] relative overflow-hidden">
							<Person
								sx={{
									color: "lightgray",
									fontSize: "100px",
									position: "absolute",
									bottom: "-20px",
									left: "50%",
									transform: "translateX(-50%)",
								}}
							/>
						</div>

						<div>
							<span className="text-[white] text-[20px]">Hashira Hoshi</span>

							<p className="text-[#979797] text-[16px] mt-[10px]">
								Loading About...
							</p>
						</div>
					</div>

					{settingsTile.map((e, ind) => {
						const Icon = e.Icon;

						return (
							<Tile
								key={ind}
								title={e.text}
								titleSize={"17px"}
								height="60px"
								showBorder={ind === settingsTile.length - 1 ? false : true}
								profile={
									<Icon
										sx={{ color: "white", opacity: ".5", fontSize: "22px" }}
									/>
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default LeftSettings;
