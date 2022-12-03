import { TUserOptionsSignup } from "~~/backend/Auth/services/auth.service.types";
import { IAuthService } from "../ports";

export class SignupUseCase {
    private authenticationService: IAuthService;

    constructor(authDatabaseRepository: IAuthService) {
        this.authenticationService = authDatabaseRepository;
    }

    execute(userOptions: TUserOptionsSignup) {
        return this.authenticationService.signup(userOptions);
    }
}
