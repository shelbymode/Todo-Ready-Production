import { AbstractEntity } from "../Abstract/AbstractEntity";
import { TUserData, TUserDataSchema, userDataSchema } from "./UserEntity.types";

export class UserEntity extends AbstractEntity<TUserDataSchema, TUserData> {
    constructor(_data: TUserData) {
        super({ _data, _modelDataSchema: userDataSchema });
    }
}
