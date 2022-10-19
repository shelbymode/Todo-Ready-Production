import {
    TUserParserInputData,
    TUserParserOutputData,
} from "~~/parser/User/UserParser.types";
import { UserAPI } from "~~/API/User/UserAPI";
import { UserParser } from "~~/parser/User/UserParser";
import { HttpService } from "~~/shared/HttpService";

export class UserService {
    private _httpService: HttpService<
        TUserParserInputData,
        TUserParserOutputData
    >;
    private _userAPI: UserAPI;
    private _userParser: UserParser;

    constructor() {
        this._httpService = new HttpService();
        this._userAPI = new UserAPI();
        this._userParser = new UserParser();
    }

    async getOneUser(id: string): Promise<TUserParserOutputData | null> {
        return this._httpService.run({
            apiCallback: () => this._userAPI.getOneUser(id),
            parser: this._userParser.parseTo.bind(this._userParser),
        });
    }
}
