import { User } from "@prisma/client";
import { IUserRepositoryService } from "../ports";

export class CreateUserUseCase {
    private userRepositoryAdapter: IUserRepositoryService;

    constructor(userRepositoryAdapter: IUserRepositoryService) {
        this.userRepositoryAdapter = userRepositoryAdapter;
    }

    execute(body: User) {
        return this.userRepositoryAdapter.createUser(body);
    }
}
