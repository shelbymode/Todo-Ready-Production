import { CoreEntity } from "~~/app/modules/core/domain/entity/CoreEntity";
import { userDataSchema } from "../validation/userDataSchema";
import {
    TUserInputDataSchema,
    TUserParserInputData,
} from "../validation/userDataSchema.types";

export class UserEntity extends CoreEntity<
    TUserInputDataSchema,
    TUserParserInputData
> {
    constructor({
        data,
        modelDataSchema = userDataSchema,
    }: {
        data: TUserParserInputData;
        modelDataSchema?: TUserInputDataSchema;
    }) {
        super({ data, modelDataSchema });
    }
}
