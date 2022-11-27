import { CoreEntity } from "~~/app/modules/core/domain/core.entity";
import { TUserDTOSchema } from "./user.dto.schema";

export class UserEntity extends CoreEntity<TUserDTOSchema> {
    constructor(_modelDataSchema: TUserDTOSchema) {
        super(_modelDataSchema);
    }
}
