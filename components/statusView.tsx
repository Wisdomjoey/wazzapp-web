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
	let timeouts: NodeJS.Timeout[] = [];
	let index: number = 0;
	const [paused, setpaused] = useState(false);
	const [activeIndx, setactiveIndx] = useState(0);
	const [slide, setslide] = useState([] as string[]);

	const setActivePlay = (indx: number, animate: boolean, width: string) => {
console.log(indx)
		if (animate) {
			setslide((prev) => {
				let temp = prev;

				temp[indx] = `animate-play w-[${width}]`;

				return temp;
			});
		} else {
			setslide((prev) => {
				let temp = prev;

				temp[indx] = `animate-none w-[${width}]`;

				return temp;
			});
		}
	};

	const setClickedPlay = (indx: number) => {
		// if (indx > index) {
		// 	intervals.forEach((val) => clearInterval(val));
		// 	intervals = [];
		// 	for (let i = index; i < indx; i++) {
		// 		setActivePlay(i, false, "100%");
		// 	}
		// 	setActivePlay(indx, true, "100%");
		// 	startPlay();
		// } else if (indx < index) {
		// 	intervals.forEach((val) => clearInterval(val));
		// 	intervals = [];
		// 	for (let i = indx; i <= index; i++) {
		// 		setActivePlay(i, false, "0px");
		// 	}
		// 	setTimeout(() => {
		// 		setActivePlay(indx, true, "100%");
		// 		startPlay();
		// 	}, 5);
		// }
		// changeImg(indx);
		// index = indx;
	};

	const moveRight = () => {
		timeouts.forEach((val) => clearTimeout(val));
		timeouts = [];

		// setActivePlay(index, false, "100%");
		// setActivePlay(index + 1, true, "100%");
console.log(timeouts)
		// index++;
		// setactiveIndx(index);

		// setTimeout(() => startPlay(), 5000);
	};

	const moveLeft = () => {
		timeouts.forEach((val) => clearTimeout(val));
		timeouts = [];

		// setActivePlay(index, false, "0px");
		// setActivePlay(index - 1, true, "100%");

		// index--;
		// setactiveIndx(index);

		// setTimeout(() => startPlay(), 5000);
	};

	const pause = () => {
		// intervals.forEach((val) => clearInterval(val));
		// setpaused(true);
		// intervals = [];
		// const play = document.getElementById(`play${index}`);
		// play!.style.transitionP
	};

	const startPlay = () => {
		timeouts.forEach((val) => clearTimeout(val));
		timeouts = [];

		if (index + 1 < 5) {
			index++;
			setactiveIndx(index);

			setActivePlay(index, true, "100%");

			timeouts.push(
				setTimeout(() => {
					startPlay();
				}, 5000)
			);
		}
	};

	useEffect(() => {
		let temp = [];

		for (let i = 0; i < statusPosts.length; i++) {
			if (i === 0) {
				temp.push("animate-play");
			} else {
				temp.push("animate-none w-0");
			}
		}
		setActivePlay(index, true, "100%");

		setslide(temp);

		timeouts.push(setTimeout(startPlay, 5000));

		return () => {
			timeouts.forEach((val) => clearTimeout(val));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="bg-darker h-full">
			<div className="h-full">
				<div className="h-full flex justify-center items-center relative z-[1]">
					<div className="relative h-full flex items-center justify-center">
						<div id="post" className="h-full flex items-end absolute">
							<Image
								src={statusPosts[activeIndx].img}
								alt={"post"}
								className="h-full object-contain"
							/>

							<div className="bg-[#00000042] absolute flex flex-col justify-between items-center py-[15px]">
								<p className="text-[white]">
									{statusPosts[activeIndx].caption}
								</p>

								<div className="h-[70px]"></div>
							</div>
						</div>
					</div>

					<div className="absolute top-0 left-0 h-full z-[2] flex justify-between">
						<div className="flex justify-between items-center px-[30px] py-[20px] z-[1] absolute top-0 left-0">
							<ArrowBack sx={{ fontSize: "25px", color: "white" }} />

							<Close sx={{ fontSize: "25px", color: "white" }} />
						</div>

						<div className="h-full px-[30px] flex items-center">
							<div
								onClick={moveLeft}
								className="w-[45px] h-[45px] flex items-center justify-center rounded-[50%] bg-[#00000026] cursor-pointer"
							>
								<KeyboardArrowLeftRounded
									sx={{ color: "white", fontSize: "30px" }}
								/>
							</div>
						</div>

						<div className="h-full flex flex-col items-center justify-between py-[20px] relative z-[2]">
							<div className="max-w-[480px] flex flex-col gap-[15px]">
								<div className="flex items-center justify-between gap-[5px]">
									{Array(5)
										.fill(false)
										.map((_, ind) => (
											<div
												onClick={() => setClickedPlay(ind)}
												key={ind}
												className="flex-1 h-[7px] rounded-[7px] bg-[gray] overflow-hidden"
											>
												<span
													className={`h-full bg-[white] block ${slide[ind]}`}
													id={`play${ind}`}
												></span>
											</div>
										))}
								</div>

								<div className="flex justify-between items-start">
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

							<div className="max-w-[780px] flex items-center mb-[10px]">
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
										className="outline-none border-none leading-[2] bg-[transparent] placeholder:text-[15px] placeholder:opacity-[.7] placeholder:text-[white] text-[lightgray]"
									/>
								</div>

								<Send sx={{ fontSize: "27px", color: "white" }} />
							</div>
						</div>

						<div className="h-full px-[30px] flex items-center">
							<div
								onClick={moveRight}
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
