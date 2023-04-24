type Props = {
	text: string;
};

function MenuTile({ text }: Props) {
	return (
		<div
			id="tile"
			className="px-[25px] py-[15px] hover:bg-[#00000066] flex-1 cursor-pointer"
		>
			<p id="menuText" className="text-[white] text-[15px]">
				{text}
			</p>
		</div>
	);
}

export default MenuTile;
