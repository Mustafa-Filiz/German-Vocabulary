-- CreateTable
CREATE TABLE "word" (
    "id" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "definitionEng" TEXT NOT NULL,
    "definitionTr" TEXT NOT NULL,
    "example_sentence" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "word_pkey" PRIMARY KEY ("id")
);
