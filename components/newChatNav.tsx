import { West } from "@mui/icons-material";

type Props = {
	text: string;
	clicked?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

function NewChatNav({ text, clicked }: Props) {
	return (
		<div className="bg-secondary flex items-end h-[120px] p-[25px] gap-[30px]">
			<West
				onClick={clicked}
				sx={{
					fontSize: "20px",
					cursor: "pointer",
					color: "white",
				}}
			/>

			<span className="font-medium text-[18px] text-[white]">{text}</span>
		</div>
	);
}

export default NewChatNav;
