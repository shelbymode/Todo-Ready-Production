import { EndResult } from "~~/app/shared/types";
import { TUserParserOutputData } from "../infrastructure/Parser/user.parser.types";

export interface IUserRepository {
    getUserById(id: string): EndResult<TUserParserOutputData>;
}
