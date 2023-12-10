-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "CountryId" VARCHAR(30) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agents" (
    "id" TEXT NOT NULL,
    "orgName" VARCHAR(30) NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "phone" INTEGER NOT NULL,
    "cityId" VARCHAR(30) NOT NULL,

    CONSTRAINT "Agents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_CountryId_fkey" FOREIGN KEY ("CountryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agents" ADD CONSTRAINT "Agents_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
