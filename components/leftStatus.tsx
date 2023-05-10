"use client";

import { Status, statuses } from "@/utils/data";
import StatusBox from "./statusBox";
import pic from "../images/profile.png";
import { useEffect, useState } from "react";

function LeftStatus() {
	const [seen, setseen] = useState([] as Status[]);
	const [notSeen, setnotSeen] = useState([] as Status[]);

	useEffect(() => {
		let temp: Status[] = [];
		let temp1: Status[] = [];

		statuses.forEach((val) => {
			if (val.status.every((value) => value.seen === true)) {
				temp.push(val);
			}
		});

		statuses.forEach((val) => {
			if (!val.status.every((value) => value.seen === true)) {
				temp1.push(val);
			}
		});

		setseen(temp);
		setnotSeen(temp1);
	}, []);

	return (
		<div className="h-full bg-secondary">
			<div className="h-[105px] flex items-end pb-[2px]">
				<StatusBox
					name={"My Status"}
					time={"No updates"}
					img={pic}
					status={[]}
					id={0}
				/>
			</div>

			<div className="py-[15px] h-[calc(100%-105px)] overflow-auto">
				{notSeen.length > 0 && (
					<>
						<div className="px-[15px]">
							<div className="border-t border-solid border-[gray] py-[5px]">
								<span className="text-[lightgray] text-[12px] uppercase">
									recent
								</span>
							</div>
						</div>

						<div className="flex flex-col py-[7px] mb-[10px]">
							{notSeen.map((e, ind) => (
								<StatusBox
									key={ind}
									name={e.name}
									time={e.lastUpdate}
									img={e.status.slice(-1)[0].image}
									status={e.status}
									id={ind}
								/>
							))}
						</div>
					</>
				)}

				{seen.length > 0 && (
					<>
						<div className="px-[15px]">
							<div className="border-t border-solid border-[gray] py-[5px]">
								<span className="text-[lightgray] text-[12px] uppercase">
									viewed
								</span>
							</div>
						</div>

						<div className="flex flex-col py-[7px]">
							{seen.map((e, ind) => (
								<StatusBox
									key={ind}
									name={e.name}
									time={e.lastUpdate}
									img={e.status.slice(-1)[0].image}
									status={e.status}
									id={ind}
								/>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LeftStatus;
