import { IUserRepositoryService, TFilterOption } from "../ports";

export class CreateUserUseCase {
    private userRepositoryAdapter: IUserRepositoryService;

    constructor(userRepositoryAdapter: IUserRepositoryService) {
        this.userRepositoryAdapter = userRepositoryAdapter;
    }

    execute(filterOption: TFilterOption) {
        return this.userRepositoryAdapter.getUsersByFilter(filterOption);
    }
}
