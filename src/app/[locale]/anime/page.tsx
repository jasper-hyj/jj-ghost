"use server";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ Anime",
	};
}

export default async function Page() {
	return <div></div>;
}
