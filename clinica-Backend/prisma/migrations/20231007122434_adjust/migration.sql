/*
  Warnings:

  - You are about to drop the column `providerId` on the `appointments` table. All the data in the column will be lost.
  - Added the required column `userId` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_providerId_fkey";

-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "providerId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
