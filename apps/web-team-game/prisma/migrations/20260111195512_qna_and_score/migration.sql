-- AlterTable
ALTER TABLE "players" ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "qnas" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "answerVariants" TEXT[],

    CONSTRAINT "qnas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "qnas_id_key" ON "qnas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "qnas_question_key" ON "qnas"("question");
