"use server";
import { PrismaClient } from "@prisma/client";
import AnimeCarouselImage from "../(components)/animeCarouseImage";

const prisma = new PrismaClient();
export default async function animeCarouselList() {
	const animePosts = await prisma.animePost.findMany({
		select: {
			id: true,
			imagePath: true,
			animeName: true,
			userId: true,
			createdAt: true,
			updatedAt: true,
			context: true,
		},
		orderBy: {
			updatedAt: "desc",
		},
		take: 3,
	});
	return (
		<>
			<div className="carousel-indicators">
				{animePosts.map((animePost, index) => (
					<button
						key={animePost.id}
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to={index}
						className={index == 0 ? "active" : ""}
						aria-current={index == 0 ? "true" : "false"}
						aria-label={"Slide" + (index + 1)}
					></button>
				))}
			</div>
			<div className="carousel-inner" style={{ height: "500px" }}>
				{animePosts.map((animePost, index) => (
					<div
						key={animePost.id}
						className={
							index == 0
								? "active carousel-item w-100 h-100"
								: "carousel-item w-100 h-100"
						}
					>
						<AnimeCarouselImage src={animePost.imagePath!} />
						<div className="carousel-caption d-none d-md-block">
							<h5>{animePost.animeName}</h5>
							<p>{animePost.context}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

prisma.$disconnect();
