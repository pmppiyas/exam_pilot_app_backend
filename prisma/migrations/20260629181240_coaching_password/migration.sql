/*
  Warnings:

  - Added the required column `password` to the `coachings` table without a default value. This is not possible if the table is not empty.
  - Made the column `owner_email` on table `coachings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "coachings" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "serial" SET DEFAULT nextval('coaching_serial_seq')::text,
ALTER COLUMN "owner_email" SET NOT NULL;
