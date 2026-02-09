/*
  Warnings:

  - Changed the type of `category` on the `word` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('personal_info', 'family', 'home', 'daily_routine', 'shopping', 'food_drink', 'health', 'transport', 'weather_nature', 'hobby_free_time', 'work_job', 'education', 'technology');

-- AlterTable
ALTER TABLE "word" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
