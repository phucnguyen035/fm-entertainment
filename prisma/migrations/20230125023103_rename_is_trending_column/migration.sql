/*
  Warnings:

  - You are about to drop the column `isTrending` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "items" RENAME COLUMN "isTrending" TO "is_trending";
