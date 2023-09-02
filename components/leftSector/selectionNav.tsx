import { Close, MoreHoriz } from "@mui/icons-material";
import IconBox from "../iconBox";
import { useDispatch, useSelector } from "react-redux";
import { resetSelected, toggleSelection } from "@/redux/reducers/leftSectSlice";

function SelectionNav() {
	const leftState = useSelector((state) => (state as any).leftState);
	const dispatch = useDispatch();

	return (
		<nav className="h-[60px] bg-secondary flex items-center justify-between px-[20px] border-y-[1px] border-y-secondaryBorder">
			<div className="flex items-center gap-[20px]">
				<IconBox
					title={"Close"}
					clicked={() => {
						dispatch(toggleSelection(false));
						dispatch(resetSelected());
					}}
				>
					<Close sx={{ color: "lightgray", fontSize: "25px" }} />
				</IconBox>

				<p className="text-[lightgray]">{leftState.selected.length} selected</p>
			</div>

			<IconBox title={"More"}>
				<MoreHoriz sx={{ color: "lightgray", fontSize: "23px" }} />
			</IconBox>
		</nav>
	);
}

export default SelectionNav;
