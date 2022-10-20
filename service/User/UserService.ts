import { UserAPI } from "~~/API/User/UserAPI";
import { UserParser } from "~~/parser/User/UserParser";
import { HttpService } from "~~/shared/Http/HttpService";
import { logError } from "~~/utils/logError";
import { UserEntity } from "~~/entity/User/UserEntity";
import { IUserService } from "./UserService.types";

export class UserService implements IUserService {
    _httpService: HttpService;
    _userAPI: UserAPI;
    _userParser: UserParser;

    constructor() {
        this._httpService = new HttpService();
        this._userAPI = new UserAPI();
        this._userParser = new UserParser();
    }
    processData(fetchedData: unknown) {
        // Run-time validation from DB (according to input data schema)
        const validatedModel = new UserEntity({
            data: fetchedData,
        });

        // Transformation data (according to output data schema)
        const transformedModel = this._userParser.parseTo(validatedModel.data);
        return transformedModel;
    }
    async getOneUser(id: string) {
        try {
            // We can't know type from DB without run-time validation
            const fetchedData = await this._httpService.run({
                apiCallback: () => this._userAPI.getOneUser(id),
            });

            //* Validate and transform data
            const transformedData = this.processData(fetchedData);
            return transformedData;
        } catch (e) {
            logError(e);
        }
    }
}
