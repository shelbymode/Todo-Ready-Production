import { TUserParserInputData } from "~~/entity/User/UserEntity.types";
import { CoreParser } from "../Core/CoreParser";
import {
    TUserOutputDataSchema,
    TUserParserOutputData,
    userOutputDataSchema,
} from "./UserParser.types";

export class UserParser extends CoreParser<
    TUserOutputDataSchema,
    TUserParserInputData,
    TUserParserOutputData
> {
    constructor(
        modelOutputDataSchema: TUserOutputDataSchema = userOutputDataSchema
    ) {
        super(modelOutputDataSchema);
    }
}
