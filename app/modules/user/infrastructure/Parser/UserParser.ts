import { CoreParser } from "~~/app/modules/core/infrastructure/Parser/CoreParser";
import { TUserParserInputData } from "../../domain/validation/userDataSchema.types";
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
