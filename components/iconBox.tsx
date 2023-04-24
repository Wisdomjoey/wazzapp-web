type Props = {
	children: React.ReactNode;
	title: string;
	clicked?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function IconBox({ children, title, clicked }: Props) {
	return (
		<div
			onClick={clicked}
			id="icon"
			tabIndex={0}
			title={title}
			className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] focus:bg-[#ffffff33] cursor-pointer transition-all duration-[.2s]"
		>
			{children}
		</div>
	);
}

export default IconBox;
