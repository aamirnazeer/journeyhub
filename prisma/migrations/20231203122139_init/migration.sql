-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(40) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "descripton" VARCHAR(255) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
