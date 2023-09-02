import {
	AttachFileOutlined,
	AutoAwesome,
	BarChart,
	CameraAlt,
	Close,
	Delete,
	InsertDriveFile,
	MicOutlined,
	Person,
	PhotoSizeSelectActual,
	Reply,
	SentimentSatisfiedOutlined,
} from "@mui/icons-material";
import IconBox from "../iconBox";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	resetSelected,
	toggleSelection,
} from "@/redux/reducers/middleSectSlice";

function MessageTyper() {
	const middleState = useSelector((state) => (state as any).middleState);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const shortRef = useRef<HTMLDivElement>(null);
	const iconRefs = useRef<HTMLDivElement[]>([]);

	const openShortLinks = useCallback(() => {
		if (!open && shortRef.current !== null) {
			shortRef.current.classList.replace("hidden", "flex");

			setTimeout(() => {
				iconRefs.current.forEach((val) => {
					val.classList.replace("opacity-0", "opacity-100");
					val.classList.replace("-bottom-[8px]", "bottom-[8px]");
				});

				setTimeout(() => {
					setOpen(true);
				}, 420);
			}, 5);
		}
	}, [open]);

	const closeShortLinks = useCallback(
		(e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (!["iconC"].includes(target.id) && open && shortRef.current !== null) {
				iconRefs.current.forEach((val) => {
					val.classList.replace("opacity-100", "opacity-0");
					val.classList.replace("bottom-[8px]", "-bottom-[8px]");
				});

				setTimeout(() => {
					shortRef.current!.classList.replace("flex", "hidden");

					setOpen(false);
				}, 420);
			}
		},
		[open]
	);

	useEffect(() => {
		window.addEventListener("click", closeShortLinks);

		return () => window.removeEventListener("click", closeShortLinks);
	}, [closeShortLinks]);

	return (
		<div className="w-full bg-darker h-[60px]">
			{middleState.isSelecting ? (
				<div className="h-full bg-[#ffffff08] flex items-center justify-between px-[20px]">
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

						<p className="text-[lightgray]">
							{middleState.selected.length} selected
						</p>
					</div>

					<div className="flex items-center gap-[15px]">
						<IconBox title={"Delete"}>
							<Delete sx={{ color: "lightgray", fontSize: "25px" }} />
						</IconBox>

						<IconBox title={"Forward"}>
							<Reply
								sx={{
									color: "lightgray",
									fontSize: "25px",
									transform: "rotateY(180deg)",
								}}
							/>
						</IconBox>
					</div>
				</div>
			) : (
				<div className="h-full bg-secondaryLight flex items-center justify-between px-[20px] py-[10px] gap-[10px]">
					<SentimentSatisfiedOutlined
						sx={{
							color: "lightgray",
							opacity: 0.7,
							fontSize: "25px",
							cursor: "pointer",
						}}
					/>

					<div className="relative flex flex-col-reverse items-center">
						<IconBox title={"Menu"} clicked={openShortLinks}>
							<AttachFileOutlined
								sx={{
									color: "lightgray",
									opacity: 0.7,
									fontSize: "25px",
									transform: "rotate(45deg)",
								}}
							/>
						</IconBox>

						<div
							id="shortL"
							ref={shortRef}
							className="absolute hidden flex-col bottom-[53px]"
						>
							{[
								[
									BarChart,
									"bg-[linear-gradient(to_bottom,#00ad85_50%,#00c991_50%)]",
									"25px",
								],
								[
									Person,
									"bg-[linear-gradient(to_bottom,#00a5ad_50%,#00bec7_50%)]",
									"25px",
								],
								[
									InsertDriveFile,
									"bg-[linear-gradient(to_bottom,#6f48bb_50%,#8958e9_50%)]",
									"22px",
								],
								[
									CameraAlt,
									"bg-[linear-gradient(to_bottom,#cb2d4b_50%,#ef3a5c_50%)]",
									"22px",
								],
								[
									AutoAwesome,
									"bg-[linear-gradient(to_bottom,#115fb1_50%,#0c6fd7_50%)]",
									"22px",
								],
								[
									PhotoSizeSelectActual,
									"bg-[linear-gradient(to_bottom,#c737c9_50%,#d746d9_50%)]",
									"22px",
								],
							].map((val, ind) => {
								const Icon = val[0];
								const size = val[2] as string;
								const delay = `${120 - ind * 20}ms`;

								return (
									<div
										className="w-[61px] h-[61px] relative"
										key={ind}
										id="iconC"
									>
										<div
											id="iconL"
											ref={(ref) => (iconRefs.current[ind] = ref!)}
											style={{ transitionDelay: delay }}
											className={`w-[47px] h-[47px] rounded-[50%] ${val[1]} flex items-center justify-center cursor-pointer absolute left-[8px] -bottom-[8px] opacity-0 transition-all duration-300 ease-in-out`}
										>
											<Icon sx={{ color: "white", fontSize: size }} />
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="flex-1 h-full rounded-[7px] bg-[#ffffff17] flex items-center px-[20px]">
						<input
							type="text"
							className="flex-1 bg-[transparent] border-none outline-none placeholder:text-[lightgray] leading-[2] placeholder:opacity-[.7] text-[16px] text-[lightgray] my-[5px]"
							placeholder="Type a message"
						/>
					</div>

					<MicOutlined
						sx={{
							color: "lightgray",
							opacity: 0.7,
							fontSize: "25px",
							cursor: "pointer",
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default MessageTyper;
