"use server";

import { getAnimeCard } from "../(repository)/animeRepository";
import AnimeCardImg from "./animeCardImage";

export default async function AnimeCard({ locale }: { locale: string }) {
	const animeCards = await getAnimeCard(locale);
	return (
		<div
			className="row"
			id="anime-card-row"
			data-masonry='{"percentPosition": true }'
		>
			{animeCards.map((animeCard, index) => (
				<div className="col-sm-6 col-lg-4 mb-4" key={animeCard.id}>
					<div className="card">
						<AnimeCardImg src={animeCard.imagePath} />

						<div className="card-body">
							<h5 className="card-title">
								{animeCard.animeName}
							</h5>
							<p className="card-text">{animeCard.animeDescr}</p>
							<p className="card-text">
								<small className="text-body-secondary">
									{animeCard.updateAt}
								</small>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
