/*
  Warnings:

  - You are about to drop the column `ranking` on the `items` table. All the data in the column will be lost.
  - Added the required column `rating` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "ranking";
ALTER TABLE "items" ADD COLUMN     "rating" STRING NOT NULL;
