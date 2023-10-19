import { getDictionary } from "../dictionaries";
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
		</>
	);
}
