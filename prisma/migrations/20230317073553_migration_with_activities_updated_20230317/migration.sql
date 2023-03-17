/*
  Warnings:

  - Added the required column `endsAt` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activities" ADD COLUMN     "endsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL;
