import { AuthDatabaseRepository } from "../../data/AuthDatabaseRepository";

export class LogoutUseCase {
    private authDatabaseRepository: AuthDatabaseRepository;

    constructor(authDatabaseRepository: AuthDatabaseRepository) {
        this.authDatabaseRepository = authDatabaseRepository;
    }

    execute() {
        return this.authDatabaseRepository.logout();
    }
}
