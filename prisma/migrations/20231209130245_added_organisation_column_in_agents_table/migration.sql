/*
  Warnings:

  - Added the required column `organisationId` to the `Agents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agents" ADD COLUMN     "organisationId" VARCHAR(30) NOT NULL;

-- AddForeignKey
ALTER TABLE "Agents" ADD CONSTRAINT "Agents_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
