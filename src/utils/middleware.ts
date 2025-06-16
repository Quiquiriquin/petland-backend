export type ClientType = "1" | "4" | "10";
export enum ClientEnum {
  ADMIN = "admin",
  CLIENT = "client",
  OWNER = "owner",
  UNKNOWN = "unknown",
}
export const translateClient = (rawClient: ClientType) => {
  switch (rawClient) {
    case "1":
      return ClientEnum.ADMIN;
    case "4":
      return ClientEnum.CLIENT;
    case "10":
      return ClientEnum.OWNER;
    default:
      return ClientEnum.UNKNOWN;
  }
};
