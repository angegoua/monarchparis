/*
  Warnings:

  - Made the column `company` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "improvements" TEXT,
ALTER COLUMN "company" SET NOT NULL;
