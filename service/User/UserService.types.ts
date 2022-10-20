import { TUserParserOutputData } from "~~/parser/User/UserParser.types";

export interface IUserService {
    getOneUser: (id: string) => Promise<TUserParserOutputData | never>;
}
