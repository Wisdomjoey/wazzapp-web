type Props = {
	text: string;
	delay: string;
	id?: string;
	tileRef: React.RefObject<HTMLDivElement>;
	clicked?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function MenuTile({ text, delay, id, tileRef, clicked }: Props) {
	return (
		<div
			id={id ? `tile${id}` : "tile"}
			ref={tileRef}
			onClick={clicked}
			style={{ transitionDelay: delay }}
			className="px-[25px] py-[13px] hover:bg-[#00000066] flex-1 cursor-pointer opacity-0"
		>
			<p id="menuText" className="text-[white] text-[14px]">
				{text}
			</p>
		</div>
	);
}

export default MenuTile;
