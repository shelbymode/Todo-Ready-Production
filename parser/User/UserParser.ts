import { CoreParser } from "../Core/CoreParser";
import {
    TUserOutputDataSchema,
    TUserParserInputData,
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
