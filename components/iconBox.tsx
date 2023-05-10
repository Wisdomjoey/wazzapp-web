type Props = {
	children: React.ReactNode;
	title: string;
	id?: string;
	clicked?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function IconBox({ children, title, id, clicked }: Props) {
	return (
		<div
			onClick={clicked}
			id={id ? `icon${id}` : "icon"}
			tabIndex={0}
			title={title}
			className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] focus:bg-[#ffffff33] cursor-pointer transition-all duration-[.2s]"
		>
			{children}
		</div>
	);
}

export default IconBox;
