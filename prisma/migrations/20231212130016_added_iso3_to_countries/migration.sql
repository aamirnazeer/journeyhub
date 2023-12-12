/*
  Warnings:

  - A unique constraint covering the columns `[iso3]` on the table `Country` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "iso3" VARCHAR(3) NOT NULL DEFAULT 'AAA';

-- CreateIndex
CREATE UNIQUE INDEX "Country_iso3_key" ON "Country"("iso3");
