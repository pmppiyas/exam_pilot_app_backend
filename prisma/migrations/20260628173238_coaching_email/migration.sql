/*
  Warnings:

  - You are about to drop the column `owner_id` on the `coachings` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[owner_email]` on the table `coachings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "coachings_owner_id_key";

-- AlterTable
ALTER TABLE "coachings" DROP COLUMN "owner_id",
ADD COLUMN     "owner_email" TEXT,
ALTER COLUMN "serial" SET DEFAULT nextval('coaching_serial_seq')::text;

-- CreateIndex
CREATE UNIQUE INDEX "coachings_owner_email_key" ON "coachings"("owner_email");
