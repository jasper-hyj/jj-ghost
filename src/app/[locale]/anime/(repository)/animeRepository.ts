"use server";
import { PrismaClient } from "@prisma/client";
import animeList from "./anime.json"
// const prisma = new PrismaClient();
export async function getAnimeCarousel(locale: string) {
	// const animeList = await prisma.animePost.findMany({
	// 	where: {
	// 		locale: locale,
	// 	},
	// 	orderBy: {
	// 		updatedAt: "desc",
	// 	},
	// 	take: 10,
	// });
	return animeList.filter((anime) => { return anime.locale === locale });
}

// prisma.$disconnect();
