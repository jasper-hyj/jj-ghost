"use server";
import { getDictionary } from "./dictionaries";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "JJ Ghost",
	};
}

export default async function Page({ params }: { params: { locale: string } }) {
	const dict = await getDictionary(params.locale);
	return (
		<main className="px-3">
			<style>{"body{ height: 100% }"}</style>
			<h1>Jasper the Friendly Ghost</h1>
			<p className="lead">Welcome to my Website</p>
			<p className="lead">
				<a
					href="#"
					className="btn btn-lg btn-light fw-bold border-white bg-white"
				>
					More About Me...
				</a>
			</p>
		</main>
	);
}
