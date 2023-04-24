import { StaticImageData } from "next/image";
import pic from "../images/profile.png";

export type Status = {
	name: string;
	lastUpdate: string;
	status: Stats[];
};

export type Stats = {
  image: StaticImageData;
  uploadedAt: string;
  seen: boolean;
}

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
