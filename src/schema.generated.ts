import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info?: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DogBreed: DogBreed;
  DogInput: DogInput;
  GqlDog: ResolverTypeWrapper<GqlDog>;
  GqlUser: ResolverTypeWrapper<GqlUser>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserInput: UserInput;
  UserRole: UserRole;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  DogInput: DogInput;
  GqlDog: GqlDog;
  GqlUser: GqlUser;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UserInput: UserInput;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type GqlDogResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GqlDog'] = ResolversParentTypes['GqlDog']> = ResolversObject<{
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  breed?: Resolver<ResolversTypes['DogBreed'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['GqlUser']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GqlUser'] = ResolversParentTypes['GqlUser']> = ResolversObject<{
  birthDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  dogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['GqlDog']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createDog?: Resolver<ResolversTypes['GqlDog'], ParentType, ContextType, RequireFields<MutationCreateDogArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['GqlUser'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userDogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['GqlDog']>>>, ParentType, ContextType, RequireFields<QueryUserDogsArgs, 'userId'>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  GqlDog?: GqlDogResolvers<ContextType>;
  GqlUser?: GqlUserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

