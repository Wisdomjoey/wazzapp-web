type Props = {
	showBorder?: boolean;
	showLongBorder?: boolean;
	profile?: React.ReactNode;
	children?: React.ReactNode;
	title: string;
	text?: string;
	date?: string;
	height?: string;
	titleColor?: string;
	titleSize: string;
	clicked?: (
		e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
	) => void;
};

function Tile({
	showBorder = true,
	showLongBorder = false,
	profile,
	children,
	title,
	date,
	height = "65px",
	titleColor,
	titleSize = "18px",
	text,
	clicked,
}: Props) {
	return (
		<div className="w-full">
			<div
				onClick={clicked}
				style={{
					height: height,
				}}
				className={`flex items-center hover:bg-[#ffffff1a]${
					showLongBorder ? " border-b border-solid border-secondary" : ""
				}`}
			>
				<div className="h-full w-[90px] flex items-center justify-center">
					{profile}
				</div>

				<div
					className={`overflow-hidden${
						showLongBorder || !showBorder
							? ""
							: " border-b border-solid border-secondary"
					} h-full w-full`}
				>
					<div className="flex flex-col pr-[15px] h-full justify-center">
						<div>
							<div className="flex items-end justify-between gap-[5px]">
								<p
									className={`${
										titleColor ? `text-[${titleColor}]` : "text-[white]"
									} text-[${titleSize}] whitespace-nowrap overflow-hidden text-ellipsis flex-1`}
								>
									{title}
								</p>

								{date && (
									<span className="text-[12px] text-[#979797]">{date}</span>
								)}
							</div>

							{text && (
								<div className="flex items-center justify-between overflow-hidden gap-[10px] mt-[5px]">
									<p className="overflow-hidden text-[14px] text-[#979797] overflow-ellipsis whitespace-nowrap">
										{text}
									</p>

									{children && (
										<div className="flex items-center gap-[5px]">
											{children}
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tile;
