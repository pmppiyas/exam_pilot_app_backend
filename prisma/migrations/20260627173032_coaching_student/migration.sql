-- CreateEnum
CREATE TYPE "CoachingStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "StudentStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DROPPED', 'GRADUATED');

-- CreateTable
CREATE TABLE "coachings" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "owner_name" VARCHAR(150) NOT NULL,
    "owner_id" TEXT,
    "logo" TEXT,
    "banner" TEXT,
    "phone" VARCHAR(20),
    "address" TEXT,
    "status" "CoachingStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "coachings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "user_id" TEXT NOT NULL,
    "roll_number" VARCHAR(50),
    "guardian_phone" VARCHAR(20),
    "enrolled_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StudentStatus" NOT NULL DEFAULT 'ACTIVE',
    "institution" VARCHAR(150),
    "coaching_id" TEXT NOT NULL,
    "batch_id" TEXT,
    "class_id" TEXT,

    CONSTRAINT "students_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coachings_slug_key" ON "coachings"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "coachings_owner_id_key" ON "coachings"("owner_id");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_coaching_id_fkey" FOREIGN KEY ("coaching_id") REFERENCES "coachings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
