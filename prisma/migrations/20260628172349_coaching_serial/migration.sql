-- AlterTable
ALTER TABLE "coachings" ALTER COLUMN "serial" SET DEFAULT nextval('coaching_serial_seq')::text;
