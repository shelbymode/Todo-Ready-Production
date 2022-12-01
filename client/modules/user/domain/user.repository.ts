import { EndResult } from "~~/client/shared/types";
import { TUserOutputData } from "../infrastructure/Parser/user.parser.schema";

export interface IUserRepository {
    getUserById(id: string): EndResult<TUserOutputData>;
}
