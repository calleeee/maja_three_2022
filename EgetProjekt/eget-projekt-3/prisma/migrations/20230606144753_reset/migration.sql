/*
  Warnings:

  - Added the required column `session` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "passwordHash" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL,
    "colortheme" TEXT NOT NULL,
    "darkMode" BOOLEAN NOT NULL,
    "siteVisits" INTEGER NOT NULL,
    "session" TEXT NOT NULL
);
INSERT INTO "new_User" ("colortheme", "darkMode", "email", "id", "passwordHash", "profilePic", "siteVisits", "username") SELECT "colortheme", "darkMode", "email", "id", "passwordHash", "profilePic", "siteVisits", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_passwordHash_key" ON "User"("passwordHash");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_session_key" ON "User"("session");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
