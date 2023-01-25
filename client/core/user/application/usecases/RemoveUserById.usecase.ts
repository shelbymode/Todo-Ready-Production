import { IUserRepositoryService } from "../ports";

export class RemoveUserByIdUseCase {
    private userRepositoryAdapter: IUserRepositoryService;

    constructor(userRepositoryAdapter: IUserRepositoryService) {
        this.userRepositoryAdapter = userRepositoryAdapter;
    }

    execute(id: string) {
        return this.userRepositoryAdapter.removeUserById(id);
    }
}
