/*
  Warnings:

  - You are about to drop the column `quizSessionId` on the `quizes` table. All the data in the column will be lost.
  - Added the required column `quizid` to the `quizSessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "quizes" DROP CONSTRAINT "quizes_quizSessionId_fkey";

-- DropIndex
DROP INDEX "quizes_quizSessionId_key";

-- AlterTable
ALTER TABLE "quizSessions" ADD COLUMN     "quizid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "quizes" DROP COLUMN "quizSessionId";

-- AddForeignKey
ALTER TABLE "quizSessions" ADD CONSTRAINT "quizSessions_quizid_fkey" FOREIGN KEY ("quizid") REFERENCES "quizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
