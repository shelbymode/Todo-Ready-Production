import { TUserParserOutputData } from "~~/parser/User/UserParser.types";

export interface IUserServiceOperations {
    getUserById(id: string): Promise<TUserParserOutputData>;
}
