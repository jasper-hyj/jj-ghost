-- AlterTable
ALTER TABLE "AnimePost" ADD COLUMN     "animeDescr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "locale" TEXT NOT NULL DEFAULT 'us',
ALTER COLUMN "imagePath" SET DEFAULT '',
ALTER COLUMN "animeName" SET DEFAULT '';
