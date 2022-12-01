import { UseCaseCore } from "~~/client/modules/core/application/core.usecase";
import { TUserOutputData } from "../infrastructure/Parser/user.parser.schema";
import { UserService } from "../infrastructure/Service/user.service";

export class GetOneUser extends UseCaseCore<{ id: string }, TUserOutputData> {
    constructor() {
        super(({ id }: { id: string }) => {
            const userService = new UserService();
            return userService.getUserById(id);
        });
    }
}
