import { TUserParserOutputData } from "../Parser/UserParser.types";

export interface IUserServiceOperations {
    getUserById(id: string): Promise<TUserParserOutputData>;
}
