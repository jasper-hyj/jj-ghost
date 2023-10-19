"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getAnimeCarousel(locale: string) {
	// const animePosts = await prisma.animePost.findMany({
	// 	where: {
	// 		locale: locale,
	// 	},
	// 	orderBy: {
	// 		updatedAt: "desc",
	// 	},
	// 	take: 10,
	// });

	const animePosts = [
		{
			id: "1",
			animeName: "16bit Sensation",
			animeDescr: "Description",
			imagePath:
				"/static/anime/16bit-sensation/202310051638549987_2016.jpg",
		},
		{
			id: "2",
			animeName: "Stardust Telepath",
			animeDescr: "Description",
			imagePath: "/static/anime/stardust-telepath/230209-hoshi-02.jpg",
		},
	];

	return animePosts;
}

prisma.$disconnect();
