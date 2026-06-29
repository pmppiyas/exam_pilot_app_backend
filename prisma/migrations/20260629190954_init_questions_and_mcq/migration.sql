CREATE SEQUENCE IF NOT EXISTS question_no_seq START WITH 1;

-- AlterTable
ALTER TABLE "coachings" ALTER COLUMN "serial" SET DEFAULT nextval('coaching_serial_seq')::text;

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "question_no" INTEGER NOT NULL DEFAULT nextval('question_no_seq'),
    "title" TEXT NOT NULL,
    "option_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,
    "correct_answer" VARCHAR(10) NOT NULL,
    "explain" TEXT,
    "creator_name" VARCHAR(150) NOT NULL,
    "coaching_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_coaching_id_fkey" FOREIGN KEY ("coaching_id") REFERENCES "coachings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
