type Props = {
	text: string;
};

function TileInfo({ text }: Props) {
	return (
		<div className="h-[70px] flex items-center pl-[35px] uppercase text-primaryDark text-[14px]">
			{text}
		</div>
	);
}

export default TileInfo;
