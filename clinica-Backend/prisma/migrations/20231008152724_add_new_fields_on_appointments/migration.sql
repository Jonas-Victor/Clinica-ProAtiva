/*
  Warnings:

  - Added the required column `consulta` to the `appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomePaciente` to the `appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidade` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointments" ADD COLUMN     "consulta" TEXT NOT NULL,
ADD COLUMN     "nomePaciente" TEXT NOT NULL,
ADD COLUMN     "unidade" TEXT NOT NULL;
