/*
  Warnings:

  - Added the required column `auditorium` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activities" ADD COLUMN     "auditorium" VARCHAR(255) NOT NULL;
