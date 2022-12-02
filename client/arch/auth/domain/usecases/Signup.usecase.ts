import { AuthDatabaseRepository } from "../../data/AuthDatabaseRepository";
import { TUserOptionsSignup } from "~~/backend/Auth/infrastructure/Service/auth.service.types";

export class SignupUseCase {
    private authDatabaseRepository: AuthDatabaseRepository;

    constructor(authDatabaseRepository: AuthDatabaseRepository) {
        this.authDatabaseRepository = authDatabaseRepository;
    }

    execute(userOptions: TUserOptionsSignup) {
        return this.authDatabaseRepository.signup(userOptions);
    }
}
