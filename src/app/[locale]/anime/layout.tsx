import Icon from "../(components)/icon";
import { getDictionary } from "../dictionaries";
import Image from "next/image";
import AnimeCarousel from "./(components)/animeCarousel";

export default async function animeLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const dict = await getDictionary(params.locale);

	return (
		<>
			<AnimeCarousel />
			{children}
		</>
	);
}
