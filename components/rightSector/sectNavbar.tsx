import { Close } from "@mui/icons-material";
import IconBox from "../iconBox";
import { changeSect } from "@/redux/reducers/routeSlice";
import { useDispatch, useSelector } from "react-redux";

function SectNavbar({ title }: { title: string }) {
	const routes = useSelector((state) => (state as any).routes);
	const dispatch = useDispatch();

	const closeSideSect = () => {
		const sideSect = document.getElementById("sideSect");
		const contact = document.getElementById("contact");
		const search = document.getElementById("searchMsg");

		switch (routes.sideSect) {
			case "contactInfo":
				contact!.classList.replace("opacity-100", "opacity-0");
				break;

			case "searchMsgs":
				search!.classList.replace("opacity-100", "opacity-0");
				break;

			default:
				break;
		}

		setTimeout(() => {
			sideSect!.classList.replace("basis-[30%]", "basis-0");

			setTimeout(() => {
				dispatch(changeSect(""));
			}, 200);
		}, 100);
	};

	return (
		<nav className="h-[60px] bg-secondary flex items-center justify-start px-[25px] gap-[30px]">
			<IconBox title="Close" clicked={closeSideSect}>
				<Close sx={{ fontSize: "22px", color: "white", opacity: ".7" }} />
			</IconBox>

			<span className="text-[white] text-[16px]">{title}</span>
		</nav>
	);
}

export default SectNavbar;
