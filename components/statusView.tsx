"use client";

import Image from "next/image";
import post from "../images/3bb1.jpg";
import {
	ArrowBack,
	Close,
	KeyboardArrowLeftRounded,
	KeyboardArrowRightRounded,
	LoyaltyOutlined,
	MoodOutlined,
	MoreVert,
	Pause,
	PlayArrow,
	Send,
	VolumeOff,
} from "@mui/icons-material";
import { useEffect } from "react";

function StatusView() {
	let intervals: NodeJS.Timeout[] = [];
	let index: number = 0;

	const setActivePlay = (indx: number, trans: string, width: string) => {
		const play = document.getElementById(`play${indx}`);

		play!.style.transition = trans;
		play!.style.width = width;
	};

	const setClickedPlay = (indx: number) => {
		if (indx > index) {
			intervals.forEach((val) => clearInterval(val));

			for (let i = index; i < indx; i++) {
				setActivePlay(i, "none", "100%");
			}

			setActivePlay(indx, "width 5s linear", "100%");

			startPlay();
		} else if (indx < index) {
			intervals.forEach((val) => clearInterval(val));

			for (let i = indx; i <= index; i++) {
				setActivePlay(i, "none", "0px");
			}

			setTimeout(() => {
				setActivePlay(indx, "width 5s linear", "100%");

				startPlay();
			}, 10);
		}

		index = indx;
	};

	const moveRight = () => {
		intervals.forEach((val) => clearInterval(val));

		setActivePlay(index, "none", "100%");
		setActivePlay(index + 1, "width 5s linear", "100%");

		index++;
		startPlay();
	};

	const moveLeft = () => {
		intervals.forEach((val) => clearInterval(val));

		for (let i = index - 1; i <= index; i++) {
			setActivePlay(i, "none", "0px");
		}

		setTimeout(() => {
			setActivePlay(index - 1, "width 5s linear", "100%");

			index--;
			startPlay();
		}, 10);
	};

	const startPlay = () => {
		intervals.push(
			setInterval(() => {
				if (index + 1 < 5) {
					index++;

					setActivePlay(index, "width 5s linear", "100%");
				}
			}, 5000)
		);
	};

	useEffect(() => {
		setActivePlay(index, "width 5s linear", "100%");

		startPlay();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="bg-darker h-full w-full">
			<div className="w-full h-full relative">
				<div className="blur-[60px] absolute top-0 left-0 w-full h-full bg-[url(/3bb1.jpg)] opacity-90 bg-no-repeat bg-center bg-cover"></div>

				<div className="w-full flex justify-between items-center absolute top-0 left-0 z-[3] px-[30px] py-[20px]">
					<ArrowBack sx={{ fontSize: "25px", color: "white" }} />

					<Close sx={{ fontSize: "25px", color: "white" }} />
				</div>

				<div className="h-full flex justify-center items-center relative z-[1]">
					<div className="bg-darker h-full relative flex items-end">
						<Image
							src={post}
							alt={"post"}
							className="h-full w-full object-contain"
						/>

						<div className="w-full h-[110px] bg-[#00000042] absolute flex justify-center py-[15px]">
							<p className="text-[white]">ywuyquwhqwfhh</p>
						</div>
					</div>

					<div className="absolute top-0 left-0 w-full h-full z-[2] flex justify-between">
						<div className="h-full px-[30px] flex items-center">
							<div
								onClick={() => moveLeft()}
								className="w-[45px] h-[45px] flex items-center justify-center rounded-[50%] bg-[#00000026] cursor-pointer"
							>
								<KeyboardArrowLeftRounded
									sx={{ color: "white", fontSize: "30px" }}
								/>
							</div>
						</div>

						<div className="h-full w-full flex flex-col items-center justify-between py-[20px]">
							<div className="w-full max-w-[480px] flex flex-col gap-[15px] relative z-[4]">
								<div className="w-full flex items-center justify-between gap-[5px]">
									{Array(5)
										.fill(false)
										.map((_, ind) => (
											<div
												onClick={() => setClickedPlay(ind)}
												key={ind}
												className="flex-1 h-[7px] rounded-[7px] bg-[gray] overflow-hidden"
											>
												<span
													className="w-0 h-full bg-[white] block"
													id={`play${ind}`}
												></span>
											</div>
										))}
								</div>

								<div className="w-full flex justify-between">
									<div className="flex-1 flex items-center gap-[15px]">
										<Image
											src={post}
											alt={"post"}
											className="h-[40px] w-[40px] rounded-[50%]"
										/>

										<div className="flex flex-col gap-[5px]">
											<p className="text-[white] text-[14px]">Jay Z</p>

											<span className="text-[#c3c3c3] text-[12px]">
												yesterday at 11:03 PM
											</span>
										</div>
									</div>

									<div className="flex-1 flex items-center justify-end gap-[10px]">
										{/* <PlayArrow /> */}
										<Pause sx={{ fontSize: "20px", color: "white" }} />

										<VolumeOff sx={{ fontSize: "20px", color: "white" }} />

										<MoreVert sx={{ fontSize: "20px", color: "white" }} />
									</div>
								</div>
							</div>

							<div className="w-full max-w-[780px] flex items-center">
								<MoodOutlined
									sx={{ fontSize: "27px", color: "white", marginRight: "15px" }}
								/>

								<LoyaltyOutlined
									sx={{ fontSize: "27px", color: "white", marginRight: "15px" }}
								/>

								<div className="flex-1 h-[40px] rounded-[5px] bg-[#00000069] px-[20px] flex items-center mr-[10px]">
									<input
										type="text"
										placeholder="Type a reply..."
										className="outline-none border-none leading-[2] w-full bg-[transparent] placeholder:text-[15px] placeholder:opacity-[.7] placeholder:text-[white] text-[lightgray]"
									/>
								</div>

								<Send sx={{ fontSize: "27px", color: "white" }} />
							</div>
						</div>

						<div className="h-full px-[30px] flex items-center">
							<div
								onClick={() => moveRight()}
								className="w-[45px] h-[45px] flex items-center justify-center rounded-[50%] bg-[#00000026] cursor-pointer"
							>
								<KeyboardArrowRightRounded
									sx={{ color: "white", fontSize: "30px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StatusView;
