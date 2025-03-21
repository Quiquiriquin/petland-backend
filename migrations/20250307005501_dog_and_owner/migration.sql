-- CreateEnum
CREATE TYPE "DogBreed" AS ENUM ('LABRADOR_RETRIEVER', 'GERMAN_SHEPHERD', 'GOLDEN_RETRIEVER', 'FRENCH_BULLDOG', 'BULLDOG', 'POODLE', 'BEAGLE', 'ROTTWEILER', 'GERMAN_SHORT_HAIRED_POINTER', 'YORKSHIRE_TERRIER', 'BOXER', 'DACHSHUND', 'SIBERIAN_HUSKY', 'DOBERMAN_PINSCHER', 'GREAT_DANE', 'AUSTRALIAN_SHEPHERD', 'CAVALIER_KING_CHARLES_SPANIEL', 'SHIH_TZU', 'BOSTON_TERRIER', 'POMERANIAN', 'HAVANESE', 'SHETLAND_SHEEPDOG', 'BRITTANY', 'ENGLISH_SPRINGER_SPANIEL', 'MINIATURE_SCHNAUZER', 'BORDER_COLLIE', 'CATAHOULA_LEOPARD_DOG', 'SAINT_BERNARD', 'CHIHUAHUA', 'AKITA', 'STAFFORDSHIRE_BULL_TERRIER', 'BASSET_HOUND', 'VIZSLA', 'WEIMARANER', 'MALTESE', 'NEWFOUNDLAND', 'COLLIE', 'BULL_TERRIER', 'RHODESIAN_RIDGEBACK', 'BICHON_FRISE', 'PUG', 'BELGIAN_MALINOIS', 'COCKER_SPANIEL', 'CHOW_CHOW', 'ALASKAN_MALAMUTE', 'WHIPPET', 'SCHNAUZER', 'AIREDALE_TERRIER', 'SCOTTISH_TERRIER', 'IRISH_SETTER', 'SAMOYED', 'OTHER');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" INTEGER,
    "breed" "DogBreed",

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "lastName" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255),
    "birthDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
