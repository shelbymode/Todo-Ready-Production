import { CoreEntity } from "../Core/CoreEntity";
import { TUserData, TUserDataSchema, userDataSchema } from "./UserEntity.types";

export class UserEntity extends CoreEntity<TUserDataSchema, TUserData> {
    constructor({
        data,
        modelDataSchema = userDataSchema,
    }: {
        data: TUserData;
        modelDataSchema?: TUserDataSchema;
    }) {
        super({ data, modelDataSchema });
    }
}
