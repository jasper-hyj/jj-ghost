"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getAnimeCarousel() {
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
		take: 10,
	});
	return animePosts;
}

prisma.$disconnect();
