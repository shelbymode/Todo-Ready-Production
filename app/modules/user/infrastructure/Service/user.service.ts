import { CoreService } from "~~/app/modules/core/infrastructure/core.service";
import { EndResult } from "~~/app/shared/types";
import { UserEntity } from "../../domain/user.entity";
import { IUserRepository } from "../../domain/user.repository";
import {
    TUserDTOSchema,
    TUserDTO,
    userDTOSchema,
} from "../../domain/user.dto.schema";

import { UserAPI } from "../API/user.api";
import { UserParser } from "../Parser/user.parser";
import {
    TUserOutputData,
    TUserOutputDataSchema,
    userOutputDataSchema,
} from "../Parser/user.parser.schema";

export class UserService
    extends CoreService<
        TUserDTOSchema,
        TUserOutputDataSchema,
        TUserDTO,
        TUserOutputData
    >
    implements IUserRepository
{
    constructor() {
        super(
            new UserAPI(),
            new UserParser(userOutputDataSchema),
            new UserEntity(userDTOSchema)
        );
    }
    async getUserById(id: string): EndResult<TUserOutputData> {
        // We can't know type (only expect!) from DB without run-time validation
        const fetchedData = await this.httpService.run(() =>
            this.fetchAPI.getOne(id)
        );

        //* Validate and transform data
        if (fetchedData.isOk()) {
            const transformedData = this.processData(fetchedData.value);
            if (transformedData.isOk()) return transformedData.value;
            else return transformedData.error;
        } else return fetchedData.error;
    }
}
