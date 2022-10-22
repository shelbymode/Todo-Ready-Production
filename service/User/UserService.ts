import { UserAPI } from "~~/API/User/UserAPI";
import { UserEntity } from "~~/entity/User/UserEntity";
import {
    TUserInputDataSchema,
    TUserParserInputData,
} from "~~/entity/User/UserEntity.types";
import { UserParser } from "~~/parser/User/UserParser";
import {
    TUserOutputDataSchema,
    TUserParserOutputData,
} from "~~/parser/User/UserParser.types";
import { logError } from "~~/utils/logError";
import { CoreService } from "../Core/CoreService";
import { IUserServiceOperations } from "./IUserServiceOperations.types";

export class UserService
    extends CoreService<
        TUserInputDataSchema,
        TUserOutputDataSchema,
        TUserParserInputData,
        TUserParserOutputData
    >
    implements IUserServiceOperations
{
    constructor() {
        super({
            coreAPI: new UserAPI(),
            modelParser: new UserParser(),
            ModelEntity: UserEntity,
        });
    }
    async getUserById(id: string): Promise<TUserParserOutputData> {
        try {
            // We can't know type (only expect!) from DB without run-time validation
            const fetchedData = await this.httpService.run({
                apiCallback: () => this.coreAPI.getOne(id),
            });

            //* Validate and transform data
            const transformedData = this.processData(fetchedData as unknown);
            return transformedData;
        } catch (e) {
            logError(e);
        }
    }
}
