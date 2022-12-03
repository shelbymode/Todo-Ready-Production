import { User } from "@prisma/client";
import { IUserRepositoryService } from "../ports";

export class EditUserByIdUseCase {
    private userRepositoryAdapter: IUserRepositoryService;

    constructor(userRepositoryAdapter: IUserRepositoryService) {
        this.userRepositoryAdapter = userRepositoryAdapter;
    }

    execute(id: string, body: Partial<User>) {
        return this.userRepositoryAdapter.editUserById(id, body);
    }
}
