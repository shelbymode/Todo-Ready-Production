import { TUserOptionsLogin } from "~~/backend/Auth/services/auth.service.types";
import { IAuthService } from "../ports";

export class LoginUseCase {
    private authenticationService: IAuthService;

    constructor(authenticationService: IAuthService) {
        this.authenticationService = authenticationService;
    }

    execute(userOptions: TUserOptionsLogin) {
        return this.authenticationService.login(userOptions);
    }
}
