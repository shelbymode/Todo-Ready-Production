import { CoreParser } from "~~/app/modules/core/infrastructure/core.parser";
import { TUserDTO } from "~~/app/modules/user/domain/user.dto.schema";
import { User as TUserDB } from "@prisma/client";
import { TUserDBDataSchema } from "./user.parser.schema";

// TODO: refacotor redundant generic

export class UserParserDB extends CoreParser<TUserDBToTDOSchema, TUserDB, TUserDTO> {
    constructor(_modelOutputDataSchema: TUserDBDataSchema) {
        super(_modelOutputDataSchema);
    }
}
