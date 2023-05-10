import React from "react";
import MenuTile from "./menuTile";

type Props = {
	width: string;
	height: string;
	origin?: string;
	id: string;
	links: {
		text: string;
		clicked?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	}[];
};

function MenuBox({ width, height, origin, id, links }: Props) {
	return (
		<div
			id={`menu${id}`}
			className={`absolute scale-0 right-0 top-[45px] ${width} ${height} py-[10px] bg-secondary shadow-shadow z-10 rounded-[4px] transition-all duration-200 ease-out ${origin} hidden`}
		>
			<div id={`menuTile${id}`} className="w-full flex flex-col h-full">
				{links.map((e, ind) => {
					const delay = `${ind * 30}ms`;

					return <MenuTile key={ind} text={e.text} delay={delay} id={id} />;
				})}
			</div>
		</div>
	);
}

export default MenuBox;
