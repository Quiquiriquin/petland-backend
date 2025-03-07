export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export enum DogBreed {
  AiredaleTerrier = 'AIREDALE_TERRIER',
  Akita = 'AKITA',
  AlaskanMalamute = 'ALASKAN_MALAMUTE',
  AustralianShepherd = 'AUSTRALIAN_SHEPHERD',
  BassetHound = 'BASSET_HOUND',
  Beagle = 'BEAGLE',
  BelgianMalinois = 'BELGIAN_MALINOIS',
  BichonFrise = 'BICHON_FRISE',
  BorderCollie = 'BORDER_COLLIE',
  BostonTerrier = 'BOSTON_TERRIER',
  Boxer = 'BOXER',
  Brittany = 'BRITTANY',
  Bulldog = 'BULLDOG',
  BullTerrier = 'BULL_TERRIER',
  CatahoulaLeopardDog = 'CATAHOULA_LEOPARD_DOG',
  CavalierKingCharlesSpaniel = 'CAVALIER_KING_CHARLES_SPANIEL',
  Chihuahua = 'CHIHUAHUA',
  ChowChow = 'CHOW_CHOW',
  CockerSpaniel = 'COCKER_SPANIEL',
  Collie = 'COLLIE',
  Dachshund = 'DACHSHUND',
  DobermanPinscher = 'DOBERMAN_PINSCHER',
  EnglishSpringerSpaniel = 'ENGLISH_SPRINGER_SPANIEL',
  FrenchBulldog = 'FRENCH_BULLDOG',
  GermanShepherd = 'GERMAN_SHEPHERD',
  GermanShortHairedPointer = 'GERMAN_SHORT_HAIRED_POINTER',
  GoldenRetriever = 'GOLDEN_RETRIEVER',
  GreatDane = 'GREAT_DANE',
  Havanese = 'HAVANESE',
  IrishSetter = 'IRISH_SETTER',
  LabradorRetriever = 'LABRADOR_RETRIEVER',
  Maltese = 'MALTESE',
  MiniatureSchnauzer = 'MINIATURE_SCHNAUZER',
  Newfoundland = 'NEWFOUNDLAND',
  Other = 'OTHER',
  Pomeranian = 'POMERANIAN',
  Poodle = 'POODLE',
  Pug = 'PUG',
  RhodesianRidgeback = 'RHODESIAN_RIDGEBACK',
  Rottweiler = 'ROTTWEILER',
  SaintBernard = 'SAINT_BERNARD',
  Samoyed = 'SAMOYED',
  Schnauzer = 'SCHNAUZER',
  ScottishTerrier = 'SCOTTISH_TERRIER',
  ShetlandSheepdog = 'SHETLAND_SHEEPDOG',
  ShihTzu = 'SHIH_TZU',
  SiberianHusky = 'SIBERIAN_HUSKY',
  StaffordshireBullTerrier = 'STAFFORDSHIRE_BULL_TERRIER',
  Vizsla = 'VIZSLA',
  Weimaraner = 'WEIMARANER',
  Whippet = 'WHIPPET',
  YorkshireTerrier = 'YORKSHIRE_TERRIER'
}

export type DogInput = {
  age: Scalars['Int']['input'];
  breed: DogBreed;
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type GqlDog = {
  __typename?: 'GqlDog';
  age: Scalars['Int']['output'];
  breed: DogBreed;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner?: Maybe<GqlUser>;
  updatedAt: Scalars['Date']['output'];
};

export type GqlUser = {
  __typename?: 'GqlUser';
  birthDate?: Maybe<Scalars['Date']['output']>;
  createdAt: Scalars['Date']['output'];
  dogs?: Maybe<Array<Maybe<GqlDog>>>;
  email: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  updatedAt: Scalars['Date']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDog: GqlDog;
  createUser: GqlUser;
};


export type MutationCreateDogArgs = {
  input: DogInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<Scalars['String']['output']>;
  userDogs?: Maybe<Array<Maybe<GqlDog>>>;
};


export type QueryUserDogsArgs = {
  userId: Scalars['ID']['input'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  User = 'USER'
}
