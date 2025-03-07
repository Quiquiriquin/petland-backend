import { Selectable } from "kysely";
import { Dog } from "../db/types";
import { DogBreed, GqlDog, GqlUser } from "../schema.generated";

export const translateDog = (dog: Selectable<Dog> | Dog): GqlDog => {
  return {
    id: dog.id.toString(),
    name: dog.name,
    breed: DogBreed[dog.breed as keyof typeof DogBreed] || DogBreed.Other,
    age: dog.age,
    updatedAt: dog.updatedAt,
    owner: {} as GqlUser,
    createdAt: dog.createdAt,
  };
};

export const translateMultipleDogs = (dogs: Selectable<Dog>[]): GqlDog[] => {
  return dogs.map((dog) => translateDog(dog));
};
