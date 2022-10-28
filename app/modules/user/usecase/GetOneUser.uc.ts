import { TUserParserOutputData } from "../infrastructure/Parser/UserParser.types";
import { UserService } from "../infrastructure/Service/UserService";
import { UseCase } from "./UseCase";
import { IUseCaseGetOne } from "./UseCase.types";

export class GetOneUser
    extends UseCase<TUserParserOutputData>
    implements IUseCaseGetOne<TUserParserOutputData>
{
    getResult(id: string) {
        const userService = new UserService();
        return userService.getUserById(id);
    }
}
