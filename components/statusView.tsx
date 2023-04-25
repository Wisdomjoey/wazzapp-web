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
	VolumeOffRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { statusPosts } from "@/utils/data";

function StatusView() {
	let intervals: NodeJS.Timeout[] = [];
	let index: number = 0;
	const [paused, setpaused] = useState(false);

	const setActivePlay = (indx: number, animate: boolean, width: string) => {
		const play = document.getElementById(`play${indx}`);

		play!.style.width = "0px";
		play!.classList.replace("animate-play", "animate-none");

		if (animate) {
			setTimeout(() => {
				play!.style.width = width;
				play!.classList.replace("animate-none", "animate-play");
			}, 5);
		} else {
			play!.style.width = width;
		}
	};

	const setClickedPlay = (indx: number) => {
		if (indx > index) {
			intervals.forEach((val) => clearInterval(val));
			intervals = [];

			for (let i = index; i < indx; i++) {
				setActivePlay(i, false, "100%");
			}

			setActivePlay(indx, true, "100%");

			startPlay();
		} else if (indx < index) {
			intervals.forEach((val) => clearInterval(val));
			intervals = [];

			for (let i = indx; i <= index; i++) {
				setActivePlay(i, false, "0px");
			}

			setTimeout(() => {
				setActivePlay(indx, true, "100%");

				startPlay();
			}, 5);
		}

		changeImg(indx);

		index = indx;
	};

	const moveRight = () => {
		intervals.forEach((val) => clearInterval(val));
		intervals = [];

		setActivePlay(index, false, "100%");
		setActivePlay(index + 1, true, "100%");

		changeImg(index + 1);

		index++;
		startPlay();
	};

	const moveLeft = () => {
		intervals.forEach((val) => clearInterval(val));
		intervals = [];

		for (let i = index - 1; i <= index; i++) {
			setActivePlay(i, false, "0px");
		}

		setTimeout(() => {
			setActivePlay(index - 1, true, "100%");

			changeImg(index - 1);

			index--;
			startPlay();
		}, 5);
	};

	const changeImg = (indx: number) => {
		const prevBg = document.querySelector(".active.opacity-100");
		const prevPost = document.querySelector(".activeP.opacity-100");
		const activeBg = document.getElementById(`bg${indx}`);
		const activePost = document.getElementById(`post${indx}`);

		if (prevBg !== null && prevPost !== null) {
			prevBg.classList.remove("active");
			prevBg.classList.replace("opacity-100", "opacity-0");

			prevPost.classList.remove("activeP");
			prevPost.classList.replace("opacity-100", "opacity-0");
		}

		activeBg!.classList.add("active");
		activeBg!.classList.replace("opacity-0", "opacity-100");

		activePost!.classList.add("activeP");
		activePost!.classList.replace("opacity-0", "opacity-100");
	};

	const start = () => {
		changeImg(index);

		setActivePlay(index, true, "100%");

		startPlay();
	};

	const pause = () => {
		intervals.forEach((val) => clearInterval(val));
		intervals = [];

		const play = document.getElementById(`play${index}`);

		// play!.style.transitionP
	};

	const startPlay = () => {
		intervals.push(
			setInterval(() => {
				if (index + 1 < 5) {
					index++;

					changeImg(index);

					setActivePlay(index, true, "100%");
				}
			}, 5000)
		);
	};

	useEffect(() => {
		start();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="bg-darker h-full w-full">
			<div className="w-full h-full relative">
				<div className="blur-[60px] absolute top-0 left-0 w-full h-full opacity-90 bg-no-repeat bg-center bg-cover">
					{statusPosts.map((val, ind) => (
						<Image
							src={val.img}
							key={ind}
							id={`bg${ind}`}
							alt={"background"}
							className="object-cover w-full h-full absolute transition-[opacity] duration-200 opacity-0"
						/>
					))}
				</div>

				<div className="h-full flex justify-center items-center relative z-[1]">
					<div className="relative w-full h-full flex items-center justify-center">
						{statusPosts.map((val, ind) => (
							<div
								key={ind}
								id={`post${ind}`}
								className="h-full flex items-end absolute opacity-0"
							>
								<Image
									src={val.img}
									alt={"post"}
									className="h-full w-full object-contain"
								/>

								<div className="w-full bg-[#00000042] absolute flex flex-col justify-between items-center py-[15px]">
									<p className="text-[white]">{val.caption}</p>

									<div className="h-[70px] w-full"></div>
								</div>
							</div>
						))}
					</div>

					<div className="absolute top-0 left-0 w-full h-full z-[2] flex justify-between">
						<div className="w-full flex justify-between items-center px-[30px] py-[20px] z-[1] absolute top-0 left-0">
							<ArrowBack sx={{ fontSize: "25px", color: "white" }} />

							<Close sx={{ fontSize: "25px", color: "white" }} />
						</div>

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

						<div className="h-full w-full flex flex-col items-center justify-between py-[20px] relative z-[2]">
							<div className="w-full max-w-[480px] flex flex-col gap-[15px]">
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
													className="w-0 h-full bg-[white] block animate-play"
													id={`play${ind}`}
												></span>
											</div>
										))}
								</div>

								<div className="w-full flex justify-between items-start">
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
										<div className="cursor-pointer">
											{paused ? (
												<Pause sx={{ fontSize: "20px", color: "white" }} />
											) : (
												<PlayArrow sx={{ fontSize: "20px", color: "white" }} />
											)}
										</div>

										<div className="cursor-pointer">
											<VolumeOff
												sx={{ fontSize: "20px", color: "lightgray" }}
											/>
										</div>

										<div className="cursor-pointer">
											<MoreVert sx={{ fontSize: "20px", color: "white" }} />
										</div>
									</div>
								</div>
							</div>

							<div className="w-full max-w-[780px] flex items-center mb-[10px]">
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
