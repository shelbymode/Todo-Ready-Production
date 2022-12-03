import { IUserRepositoryService } from "../ports";

export class GetUserByIdUseCase {
    private userRepositoryAdapter: IUserRepositoryService;

    constructor(userRepositoryAdapter: IUserRepositoryService) {
        this.userRepositoryAdapter = userRepositoryAdapter;
    }

    execute(id: string) {
        return this.userRepositoryAdapter.getUserById(id);
    }
}
