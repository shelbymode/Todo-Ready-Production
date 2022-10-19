import { AbstractParser } from "../Abstract/AbstractParser";
import {
    TUserOutputDataSchema,
    TUserParserInputData,
    TUserParserOutputData,
    userOutputDataSchema,
} from "./UserParser.types";

export class UserParser extends AbstractParser<
    TUserOutputDataSchema,
    TUserParserInputData,
    TUserParserOutputData
> {
    constructor() {
        super(userOutputDataSchema);
    }
}
