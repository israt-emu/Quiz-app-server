-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('admin', 'performer');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "USER_ROLE" DEFAULT 'performer',
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "question_text" TEXT NOT NULL,
    "correct_answers" TEXT[],
    "options" TEXT[],
    "marks" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizSessions" (
    "id" TEXT NOT NULL,
    "performer" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "quizSessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizQuestions" (
    "id" TEXT NOT NULL,
    "quizQuestions" TEXT[],
    "quizSessionId" TEXT NOT NULL,

    CONSTRAINT "quizQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "quizQuestions_quizSessionId_key" ON "quizQuestions"("quizSessionId");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizSessions" ADD CONSTRAINT "quizSessions_performer_fkey" FOREIGN KEY ("performer") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizQuestions" ADD CONSTRAINT "quizQuestions_quizSessionId_fkey" FOREIGN KEY ("quizSessionId") REFERENCES "quizSessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizQuestions" ADD CONSTRAINT "quizQuestions_quizQuestions_fkey" FOREIGN KEY ("quizQuestions") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
