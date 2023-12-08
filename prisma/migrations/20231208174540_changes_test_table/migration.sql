/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Organisation" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);
