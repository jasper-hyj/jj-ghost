"use server";
import { getDictionary } from "./dictionaries";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ-Ghost",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	const dict = await getDictionary(params.locale);
	return (
		<main className="main">
			<p></p>
		</main>
	);
}
