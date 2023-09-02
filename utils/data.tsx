import { StaticImageData } from "next/image";
import pic from "../images/profile.png";
import post from "../images/3bb1.jpg";
import post1 from "../images/b2.webp";
import post2 from "../images/b3.jpg";
import post3 from "../images/b4.jpg";
import post4 from "../images/b5.webp";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import {
	BrightnessMediumRounded,
	DownloadRounded,
	DescriptionRounded,
	HelpRounded,
	LockRounded,
	NotificationsRounded,
	SecurityRounded,
	BrightnessAutoRounded,
	WallpaperRounded,
} from "@mui/icons-material";

export type Status = {
	name: string;
	lastUpdate: string;
	status: Stats[];
};

export type Stats = {
	image: StaticImageData;
	uploadedAt: string;
	seen: boolean;
};

export type StatusP = {
	img: StaticImageData;
	caption: string;
};

export const statuses: Status[] = [
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
	{
		name: "Jay Z",
		lastUpdate: "today at 22:30",
		status: [
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: true,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
			{
				image: pic,
				uploadedAt: "12:30",
				seen: false,
			},
		],
	},
];

export const statusPosts: StatusP[] = [
	{
		img: post,
		caption: "Heyyoo",
	},
	{
		img: post1,
		caption: "Whats Uppp!!!",
	},
	{
		img: post2,
		caption: "Cover for me",
	},
	{
		img: post3,
		caption: "How itd b",
	},
	{
		img: post4,
		caption: "Chopper!",
	},
];

export const settingsTile: {
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
	text: string;
}[] = [
	{
		Icon: NotificationsRounded,
		text: "Notifications",
	},
	{
		Icon: LockRounded,
		text: "Privacy",
	},
	{
		Icon: SecurityRounded,
		text: "Security",
	},
	{
		Icon: BrightnessMediumRounded,
		text: "Theme",
	},
	{
		Icon: WallpaperRounded,
		text: "Chat wallpaper",
	},
	{
		Icon: DownloadRounded,
		text: "Medi auto-download",
	},
	{
		Icon: DescriptionRounded,
		text: "Request account info",
	},
	{
		Icon: BrightnessAutoRounded,
		text: "Keyboard shortcuts",
	},
	{
		Icon: HelpRounded,
		text: "Help",
	},
];
