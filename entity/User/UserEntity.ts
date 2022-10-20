import { CoreEntity } from "../Core/CoreEntity";
import {
    TUserParserInputData,
    TUserInputDataSchema,
    userDataSchema,
} from "./UserEntity.types";

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
