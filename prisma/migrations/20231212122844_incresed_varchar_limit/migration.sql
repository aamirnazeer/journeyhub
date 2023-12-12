/*
  Warnings:

  - You are about to alter the column `organisationId` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(36)`.

*/
-- DropForeignKey
ALTER TABLE "Agents" DROP CONSTRAINT "Agents_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Agents" DROP CONSTRAINT "Agents_organisationId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_stateId_fkey";

-- DropForeignKey
ALTER TABLE "State" DROP CONSTRAINT "State_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_organisationId_fkey";

-- AlterTable
ALTER TABLE "Agents" ALTER COLUMN "orgName" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "cityId" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "organisationId" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "stateId" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "Country" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Organisation" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "State" ALTER COLUMN "countryId" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "organisationId" SET DATA TYPE VARCHAR(36);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "State" ADD CONSTRAINT "State_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agents" ADD CONSTRAINT "Agents_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agents" ADD CONSTRAINT "Agents_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
