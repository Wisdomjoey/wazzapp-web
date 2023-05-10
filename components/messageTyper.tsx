"use client";

import {
	AttachFileOutlined,
	AutoAwesome,
	BarChart,
	CameraAlt,
	InsertDriveFile,
	MicOutlined,
	Person,
	PhotoSizeSelectActual,
	SentimentSatisfiedOutlined,
} from "@mui/icons-material";
import IconBox from "./iconBox";
import { useEffect } from "react";

function MessageTyper() {
	let open: boolean = false;

	const openShortLinks = () => {
		const shortL = document.getElementById("shortL");
		const iconL = document.querySelectorAll("#iconL");

		if (open) {
			iconL.forEach((val) => {
				val.classList.replace("opacity-100", "opacity-0");
				val.classList.replace("bottom-[8px]", "-bottom-[8px]");
			});

			setTimeout(() => {
				shortL!.classList.replace("flex", "hidden");
			}, 420);

			open = false;
		} else {
			shortL!.classList.replace("hidden", "flex");

			setTimeout(() => {
				iconL.forEach((val) => {
					val.classList.replace("opacity-0", "opacity-100");
					val.classList.replace("-bottom-[8px]", "bottom-[8px]");
				});
			}, 5);

			open = true;
		}
	};

	const closeShortLinks = (e: MouseEvent) => {
		const shortL = document.getElementById("shortL");
		const iconL = document.querySelectorAll("#iconL");
		const target = e.target as HTMLElement;

		if (
			!["iconC", "shortL", "icon"].includes(target.id) &&
			target.tagName !== "svg" &&
			target.tagName !== "path" &&
			open
		) {
			iconL.forEach((val) => {
				val.classList.replace("opacity-100", "opacity-0");
				val.classList.replace("bottom-[8px]", "-bottom-[8px]");
			});

			setTimeout(() => {
				shortL!.classList.replace("flex", "hidden");
			}, 420);

			open = false;
		}
	};

	useEffect(() => {
		window.addEventListener("click", closeShortLinks);

		return () => window.removeEventListener("click", closeShortLinks);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="w-full h-[60px] bg-secondary flex items-center justify-between px-[20px] py-[10px] gap-[10px]">
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

				<div id="shortL" className="absolute hidden flex-col bottom-[53px]">
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
							<div className="w-[61px] h-[61px] relative" key={ind} id="iconC">
								<div
									id="iconL"
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

			<div className="flex-1 h-full rounded-[7px] bg-secondaryLight flex items-center px-[20px]">
				<input
					type="text"
					className="flex-1 bg-[transparent] border-none outline-none placeholder:text-[lightgray] leading-[2] placeholder:opacity-[.7] placeholder:text-[14px] text-[lightgray] my-[5px]"
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
	);
}

export default MessageTyper;
