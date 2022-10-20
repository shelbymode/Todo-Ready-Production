import { UserAPI } from "~~/API/User/UserAPI";
import { UserParser } from "~~/parser/User/UserParser";
import { TUserParserOutputData } from "~~/parser/User/UserParser.types";
import { HttpService } from "~~/shared/Http/HttpService";

export interface IUserService {
    _httpService: HttpService;
    _userAPI: UserAPI;
    _userParser: UserParser;
    processData: (fetchedData: unknown) => TUserParserOutputData | never;
    getOneUser: (id: string) => Promise<TUserParserOutputData | never>;
}
