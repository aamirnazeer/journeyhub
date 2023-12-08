/*
  Warnings:

  - You are about to drop the column `organisation` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "organisation",
ADD COLUMN     "organisationId" VARCHAR(50);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
