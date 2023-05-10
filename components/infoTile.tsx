import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

type Props = {
	title: string;
	text?: string;
	iconColor?: string;
	iconSize?: string;
	color?: string;
	hover?: string;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
	trailing?: ReactNode;
	clicked?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function InfoTile({
	title,
	text,
	Icon,
	trailing,
	clicked,
	color = "text-[white]",
	iconColor = "#bbbbbb",
	iconSize = "16px",
	hover,
}: Props) {
	return (
		<div
			onClick={clicked}
			className={`flex flex-col gap-[5px] py-[18px] pl-[40px] pr-[30px] cursor-pointer ${hover}`}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-[20px]">
					<Icon sx={{ color: iconColor, fontSize: iconSize }} />

					<p className={`${color} text-[15px]`}>{title}</p>
				</div>

				{trailing}
			</div>

			{text && (
				<div className="px-[36px]">
					<p className="text-[white] text-[13px] opacity-50">{text}</p>
				</div>
			)}
		</div>
	);
}

export default InfoTile;
