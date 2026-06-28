
CREATE SEQUENCE IF NOT EXISTS coaching_serial_seq START WITH 1000;

-- AlterTable
ALTER TABLE "coachings" ADD COLUMN     "serial" TEXT NOT NULL DEFAULT nextval('coaching_serial_seq')::text;
