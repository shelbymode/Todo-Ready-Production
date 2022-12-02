import { AuthDatabaseRepository } from "../../data/AuthDatabaseRepository";
import { TUserOptionsLogin } from "~~/backend/Auth/infrastructure/Service/auth.service.types";

export class LoginUseCase {
    private authDatabaseRepository: AuthDatabaseRepository;

    constructor(authDatabaseRepository: AuthDatabaseRepository) {
        this.authDatabaseRepository = authDatabaseRepository;
    }

    execute(userOptions: TUserOptionsLogin) {
        return this.authDatabaseRepository.login(userOptions);
    }
}
