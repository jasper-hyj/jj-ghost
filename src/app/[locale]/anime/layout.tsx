import { getDictionary } from "../dictionaries";
import AnimeCard from "./(components)/animeCard";
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
			<AnimeCarousel locale={params.locale} />
			{children}
			<div className="container mt-5">
				<AnimeCard locale={params.locale} />
			</div>
		</>
	);
}
