/*
  Warnings:

  - You are about to drop the column `picture` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "picture",
ADD COLUMN     "image" VARCHAR NOT NULL DEFAULT 'https://placehold.co/400';
