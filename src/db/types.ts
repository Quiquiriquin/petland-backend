import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { DogBreed, UserRole } from "./enums";

export type Dog = {
    id: Generated<number>;
    name: string;
    age: number;
    userId: number | null;
    breed: DogBreed | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    photo: string | null;
};
export type User = {
    id: Generated<number>;
    name: string | null;
    lastName: string | null;
    email: string;
    password: string;
    gender: string | null;
    birthDate: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp | null;
    role: Generated<UserRole>;
};
export type DB = {
    Dog: Dog;
    User: User;
};
