import { Stats } from "@/utils/data";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Props = {
	id: number;
	name: string;
	time: string;
	img: StaticImageData;
	status: Stats[];
};

function StatusBox({ name, time, img, status, id }: Props) {
	const [array, setArray] = useState("");
	const [array1, setArray1] = useState("");

	useEffect(() => {
		const length: number =
			((2 * 22 * 50) / 7 - status.length * 10) / status.length;
		let dashArray: string = "";
		let dashArray1: string = "";
		const notSeen: number = status.filter((val) => val.seen === false).length;
		const notSeenLength: number = notSeen * length + notSeen * 10;

		if (status.length > 1) {
			for (let index = 0; index < status.length; index++) {
				if (index > 0) {
					dashArray += ` ${length} 10`;
				} else {
					dashArray += `${length} 10`;
				}
			}
		}

		if (notSeen !== status.length && notSeen > 0) {
			dashArray1 += `0 ${notSeenLength}`;

			for (let index = 0; index < status.length - notSeen; index++) {
				dashArray1 += ` ${length} 10`;
			}
		} else if (notSeen <= 0) {
			for (let index = 0; index < status.length; index++) {
				if (index > 0) {
					dashArray1 += ` ${length} 10`;
				} else {
					dashArray1 += `${length} 10`;
				}
			}
		}

		setArray(dashArray);
		setArray1(dashArray1);
	}, [id, status, status.length]);

	return (
		<div className="flex gap-[15px] items-center cursor-pointer hover:bg-[#ffffff1a] py-[8px] px-[15px]">
			<div className="w-[50px] h-[50px] relative flex items-center justify-center">
				<Image
					alt="Profile pic"
					src={img}
					height={43}
					width={43}
					className="rounded-[50%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
				/>

				{status.length > 0 && (
					<svg width={50} height={50} viewBox="0 0 104 104">
						<circle
							cx={52}
							cy={52}
							id={`circle${id}`}
							strokeWidth={4}
							fill="none"
							strokeLinecap="round"
							r={50}
							strokeDashoffset={"74"}
							strokeDasharray={array}
							className="stroke-primaryDark"
						/>

						{status.filter((val) => val.seen === true).length > 0 && (
							<circle
								cx={52}
								cy={52}
								id={`circle${id}`}
								strokeWidth={4}
								fill="none"
								strokeLinecap="round"
								r={50}
								strokeDashoffset={"74"}
								strokeDasharray={array1}
								className="stroke-[#c3c3c3]"
							/>
						)}
					</svg>
				)}
			</div>

			<div className="flex flex-col gap-[5px] flex-1">
				<p className="text-[white] text-[15px]">{name}</p>

				<span className="text-[#a7a7a7] text-[12px]">{time}</span>
			</div>
		</div>
	);
}

export default StatusBox;
