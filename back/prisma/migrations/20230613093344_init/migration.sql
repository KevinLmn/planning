/*
  Warnings:

  - You are about to drop the column `hello` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Hello` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hello`,
    DROP COLUMN `name`;

-- DropTable
DROP TABLE `Hello`;
