import { EndResult } from "~~/app/shared/types";
import { TUserOutputData } from "../infrastructure/Parser/user.parser.schema";

export interface IUserRepository {
    getUserById(id: string): EndResult<TUserOutputData>;
}
