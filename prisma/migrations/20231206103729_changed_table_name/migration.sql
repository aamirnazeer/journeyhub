/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
