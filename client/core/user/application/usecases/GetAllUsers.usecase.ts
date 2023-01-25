import { IUserRepositoryService } from "../ports";

export class GetAllUsersUseCase {
    private userRepositoryAdapter: IUserRepositoryService;

    constructor(userRepositoryAdapter: IUserRepositoryService) {
        this.userRepositoryAdapter = userRepositoryAdapter;
    }

    execute() {
        return this.userRepositoryAdapter.getAllUsers();
    }
}
