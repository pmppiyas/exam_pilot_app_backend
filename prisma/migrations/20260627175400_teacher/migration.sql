-- CreateEnum
CREATE TYPE "TeacherStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "teachers" (
    "user_id" TEXT NOT NULL,
    "coaching_id" TEXT NOT NULL,
    "designation" VARCHAR(100),
    "qualification" TEXT,
    "specialty" VARCHAR(255),
    "phone" VARCHAR(20),
    "status" "TeacherStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_coaching_id_fkey" FOREIGN KEY ("coaching_id") REFERENCES "coachings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
