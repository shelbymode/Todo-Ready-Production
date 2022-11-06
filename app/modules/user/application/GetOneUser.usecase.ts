import { UseCaseCore } from "~~/app/modules/core/application/core.usecase";
import { TUserParserOutputData } from "../infrastructure/Parser/user.parser.types";
import { UserService } from "../infrastructure/Service/user.service";

export class GetOneUser extends UseCaseCore<
    { id: string },
    TUserParserOutputData
> {
    constructor() {
        super(({ id }: { id: string }) => {
            const userService = new UserService();
            return userService.getUserById(id);
        });
    }
}
