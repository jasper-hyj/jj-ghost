"use server";
import { PrismaClient } from "@prisma/client";
import animeList from "./anime.json"
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { JsonArray } from "@prisma/client/runtime/library";

let db: any = null;
export interface AnimePost {
	id: number
	imagePath: string
	animeName: string
	animeDescr: string
	updateAt: string
}

// const prisma = new PrismaClient();
export async function getAnimeCarousel(locale: string) {
	// GET code for Prisma client
	// const animeList = await prisma.animePost.findMany({
	// 	where: {
	// 		locale: locale,
	// 	},
	// 	orderBy: {
	// 		updatedAt: "desc",
	// 	},
	// 	take: 10,
	// });

	// Connect to Sqlite3
	// Check if the database instance has been initialized
	if (!db) {
		// If the database instance is not initialized, open the database connection
		db = await open({
			filename: "./jj-ghost.db", // Specify the database file path
			driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
		});
	}
	const items: AnimePost[] = await db.all(
		`SELECT * FROM animePost a
		where a.locale = "${locale}"
		order by a.updateAt DESC`
	);

	return items;
}

// prisma.$disconnect();
