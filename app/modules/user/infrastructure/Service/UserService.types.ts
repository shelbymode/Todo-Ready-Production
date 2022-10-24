import { EndResult } from "~~/app/shared/types";
import { TUserParserOutputData } from "../Parser/UserParser.types";

export interface IUserServiceOperations {
    getUserById(id: string): EndResult<TUserParserOutputData>;
}
