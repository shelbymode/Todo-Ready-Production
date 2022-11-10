import { CoreParser } from "~~/app/modules/core/infrastructure/core.parser";
import { TUserDTO } from "../../domain/user.dto.schema";
import { TUserOutputDataSchema, TUserOutputData } from "./user.parser.schema";

export class UserParser extends CoreParser<TUserOutputDataSchema, TUserDTO, TUserOutputData> {
    constructor(_modelOutputDataSchema: TUserOutputDataSchema) {
        super(_modelOutputDataSchema);
    }
}
