export const DogBreed = {
    LABRADOR_RETRIEVER: "LABRADOR_RETRIEVER",
    GERMAN_SHEPHERD: "GERMAN_SHEPHERD",
    GOLDEN_RETRIEVER: "GOLDEN_RETRIEVER",
    FRENCH_BULLDOG: "FRENCH_BULLDOG",
    BULLDOG: "BULLDOG",
    POODLE: "POODLE",
    BEAGLE: "BEAGLE",
    ROTTWEILER: "ROTTWEILER",
    GERMAN_SHORT_HAIRED_POINTER: "GERMAN_SHORT_HAIRED_POINTER",
    YORKSHIRE_TERRIER: "YORKSHIRE_TERRIER",
    BOXER: "BOXER",
    DACHSHUND: "DACHSHUND",
    SIBERIAN_HUSKY: "SIBERIAN_HUSKY",
    DOBERMAN_PINSCHER: "DOBERMAN_PINSCHER",
    GREAT_DANE: "GREAT_DANE",
    AUSTRALIAN_SHEPHERD: "AUSTRALIAN_SHEPHERD",
    CAVALIER_KING_CHARLES_SPANIEL: "CAVALIER_KING_CHARLES_SPANIEL",
    SHIH_TZU: "SHIH_TZU",
    BOSTON_TERRIER: "BOSTON_TERRIER",
    POMERANIAN: "POMERANIAN",
    HAVANESE: "HAVANESE",
    SHETLAND_SHEEPDOG: "SHETLAND_SHEEPDOG",
    BRITTANY: "BRITTANY",
    ENGLISH_SPRINGER_SPANIEL: "ENGLISH_SPRINGER_SPANIEL",
    MINIATURE_SCHNAUZER: "MINIATURE_SCHNAUZER",
    BORDER_COLLIE: "BORDER_COLLIE",
    CATAHOULA_LEOPARD_DOG: "CATAHOULA_LEOPARD_DOG",
    SAINT_BERNARD: "SAINT_BERNARD",
    CHIHUAHUA: "CHIHUAHUA",
    AKITA: "AKITA",
    STAFFORDSHIRE_BULL_TERRIER: "STAFFORDSHIRE_BULL_TERRIER",
    BASSET_HOUND: "BASSET_HOUND",
    VIZSLA: "VIZSLA",
    WEIMARANER: "WEIMARANER",
    MALTESE: "MALTESE",
    NEWFOUNDLAND: "NEWFOUNDLAND",
    COLLIE: "COLLIE",
    BULL_TERRIER: "BULL_TERRIER",
    RHODESIAN_RIDGEBACK: "RHODESIAN_RIDGEBACK",
    BICHON_FRISE: "BICHON_FRISE",
    PUG: "PUG",
    BELGIAN_MALINOIS: "BELGIAN_MALINOIS",
    COCKER_SPANIEL: "COCKER_SPANIEL",
    CHOW_CHOW: "CHOW_CHOW",
    ALASKAN_MALAMUTE: "ALASKAN_MALAMUTE",
    WHIPPET: "WHIPPET",
    SCHNAUZER: "SCHNAUZER",
    AIREDALE_TERRIER: "AIREDALE_TERRIER",
    SCOTTISH_TERRIER: "SCOTTISH_TERRIER",
    IRISH_SETTER: "IRISH_SETTER",
    SAMOYED: "SAMOYED",
    OTHER: "OTHER"
} as const;
export type DogBreed = (typeof DogBreed)[keyof typeof DogBreed];
export const UserRole = {
    USER: "USER",
    ADMIN: "ADMIN",
    OWNER: "OWNER"
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
