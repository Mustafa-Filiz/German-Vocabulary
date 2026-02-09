/*
  Warnings:

  - You are about to drop the column `example_sentence` on the `word` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[term]` on the table `word` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exampleSentence` to the `word` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wordType` to the `word` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `level` on the `word` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WordType" AS ENUM ('noun', 'verb', 'adjective', 'adverb');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- CreateEnum
CREATE TYPE "Article" AS ENUM ('der', 'die', 'das');

-- AlterTable
ALTER TABLE "word" DROP COLUMN "example_sentence",
ADD COLUMN     "article" "Article",
ADD COLUMN     "exampleSentence" TEXT NOT NULL,
ADD COLUMN     "pluralForm" TEXT,
ADD COLUMN     "wordType" "WordType" NOT NULL,
DROP COLUMN "level",
ADD COLUMN     "level" "Level" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "word_term_key" ON "word"("term");
