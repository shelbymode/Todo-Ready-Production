import { err, ok, ResultAsync } from "neverthrow";
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
    getUserById(id: string) {
        return ResultAsync.fromSafePromise(
            this.httpService.run(() => this.fetchAPI.getOne(id))
        )
            .andThen((fetchedData) => {
                if (fetchedData.isOk()) {
                    return ok(this.processData(fetchedData.value));
                } else if (fetchedData.isErr()) {
                    return err(fetchedData.error);
                }
            })
            .andThen((transformedData) => {
                if (transformedData.isOk()) {
                    return ok(transformedData.value);
                } else if (transformedData.isErr()) {
                    return err(transformedData.error);
                }
            });
    }
}
