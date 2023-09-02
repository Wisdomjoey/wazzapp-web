import Image from "next/image";
import post from "../../images/3bb1.jpg";
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
import { useEffect, useRef, useState } from "react";
import { statusPosts } from "@/utils/data";
import { changeRoute } from "@/redux/reducers/routeSlice";
import IconBox from "../iconBox";
import { useDispatch } from "react-redux";

function StatusView() {
	const dispatch = useDispatch();
	const playRefs = useRef<HTMLSpanElement[]>([]);
	const activeRef = useRef(0);
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);

	const movePlay = (slide: number) => {
		if (slide < activeRef.current && slide >= 0) {
			prevPlay(slide);
		} else if (slide > activeRef.current && slide < statusPosts.length) {
			nextPlay(slide);
		}
	};

	const nextPlay = (slide: number) => {
		const ele = playRefs.current;

		for (let i = activeRef.current; i < slide; i++) {
			ele[i].classList.replace("animate-play", "animate-none");
			ele[i].classList.replace("w-0", "w-[100%]");
		}

		activeRef.current = slide;
		startPlay();
	};

	const prevPlay = (slide: number) => {
		const ele = playRefs.current;

		for (let i = activeRef.current; i >= slide; i--) {
			ele[i].classList.replace("animate-play", "animate-none");
			ele[i].classList.replace("w-[100%]", "w-0");
		}

		activeRef.current = slide;
		startPlay();
	};

	const animateEnd = () => {
		playRefs.current[activeRef.current].classList.replace(
			"animate-play",
			"animate-none"
		);
		playRefs.current[activeRef.current].classList.replace("w-0", "w-[100%]");
		playRefs.current[activeRef.current].style.animationPlayState = "initial";
		movePlay(activeRef.current + 1);
	};

	const startPlay = () => {
		if (activeRef.current < statusPosts.length) {
			setActive(activeRef.current);
			const ele = playRefs.current[activeRef.current];

			ele.classList.replace("animate-none", "animate-play");
			ele.addEventListener("animationend", animateEnd);
			ele.addEventListener("animationcancel", (ev) => {
				ele.removeEventListener("animationend", animateEnd);
			});
		}
	};

	const togglePlay = () => {
		const isRunning =
			playRefs.current[activeRef.current].style.animationPlayState ===
			"running";

		playRefs.current[activeRef.current].style.animationPlayState = isRunning
			? "paused"
			: "running";
		setPaused(isRunning);
	};

	useEffect(() => {
		startPlay();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="bg-darker h-full w-full">
			<div className="h-full">
				<div className="h-full flex justify-center items-center relative z-[1]">
					<div className="relative h-full flex items-center justify-center w-full">
						<div id="post" className="h-full flex items-end absolute">
							<Image
								src={statusPosts[active].img}
								width={0}
								height={0}
								style={{
									width: "100%",
									height: "100%",
								}}
								alt={"post"}
								className="object-contain"
							/>

							<div className="bg-[#00000042] absolute flex flex-col justify-between items-center py-[15px] w-full">
								<p className="text-[white]">{statusPosts[active].caption}</p>

								<div className="h-[70px]"></div>
							</div>
						</div>
					</div>

					<div className="absolute top-0 left-0 h-full z-[2] flex justify-between w-full">
						<div className="flex justify-between items-center px-[30px] py-[20px] z-[1] absolute top-0 left-0 w-full">
							<IconBox
								title="Back"
								clicked={() => dispatch(changeRoute("status"))}
							>
								<ArrowBack sx={{ fontSize: "25px", color: "white" }} />
							</IconBox>

							<IconBox
								title="Close"
								clicked={() => dispatch(changeRoute("status"))}
							>
								<Close sx={{ fontSize: "25px", color: "white" }} />
							</IconBox>
						</div>

						<div className="h-full px-[30px] flex items-center">
							<div
								onClick={() => movePlay(active - 1)}
								className="w-[45px] h-[45px] flex items-center justify-center rounded-[50%] bg-[#00000026] cursor-pointer"
							>
								<KeyboardArrowLeftRounded
									sx={{ color: "white", fontSize: "30px" }}
								/>
							</div>
						</div>

						<div className="h-full flex flex-col items-center justify-between py-[20px] relative z-[2] w-full">
							<div className="max-w-[480px] flex flex-col gap-[15px] w-full">
								<div className="flex items-center justify-between gap-[5px]">
									{Array(5)
										.fill(false)
										.map((_, ind) => (
											<div
												onClick={() => movePlay(ind)}
												key={ind}
												className="flex-1 h-[7px] rounded-[7px] bg-[gray] overflow-hidden"
											>
												<span
													ref={(ref) => (playRefs.current[ind] = ref!)}
													className={`h-full bg-[white] block animate-none w-0`}
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

									<div className="flex-1 flex items-center justify-end">
										<div
											onClick={togglePlay}
											className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
										>
											{paused ? (
												<Pause sx={{ fontSize: "20px", color: "white" }} />
											) : (
												<PlayArrow sx={{ fontSize: "20px", color: "white" }} />
											)}
										</div>

										<div className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center">
											<VolumeOff
												sx={{ fontSize: "20px", color: "lightgray" }}
											/>
										</div>

										<div className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center">
											<MoreVert sx={{ fontSize: "20px", color: "white" }} />
										</div>
									</div>
								</div>
							</div>

							<div className="max-w-[800px] flex items-center mb-[10px] w-full">
								<MoodOutlined
									sx={{ fontSize: "29px", color: "white", marginRight: "15px" }}
								/>

								<LoyaltyOutlined
									sx={{ fontSize: "29px", color: "white", marginRight: "15px" }}
								/>

								<div className="flex-1 h-[45px] rounded-[5px] bg-[#00000047] px-[20px] flex items-center mr-[10px]">
									<input
										type="text"
										placeholder="Type a reply..."
										className="outline-none border-none leading-[2] bg-[transparent] text-[17px] placeholder:opacity-[.7] placeholder:text-[white] text-[lightgray]"
									/>
								</div>

								<Send sx={{ fontSize: "29px", color: "white" }} />
							</div>
						</div>

						<div className="h-full px-[30px] flex items-center">
							<div
								onClick={() => movePlay(active + 1)}
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
