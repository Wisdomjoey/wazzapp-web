type Props = {
	text: string;
	textSize?: string;
};

function TileInfo({ text, textSize = '14px' }: Props) {
	return (
		<div className={`h-[73px] flex items-center pl-[35px] uppercase text-primaryDark text-[${textSize}]`}>
			{text}
		</div>
	);
}

export default TileInfo;
