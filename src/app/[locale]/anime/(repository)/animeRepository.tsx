"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getAnimeCarousel(locale: string) {
	const animePosts = await prisma.animePost.findMany({
		where: {
			locale: locale,
		},
		orderBy: {
			updatedAt: "desc",
		},
		take: 10,
	});
	return animePosts;
}

prisma.$disconnect();
