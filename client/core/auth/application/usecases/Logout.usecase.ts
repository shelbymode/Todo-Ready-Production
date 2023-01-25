import { IAuthService } from "../ports";

export class LogoutUseCase {
    private authenticationService: IAuthService;

    constructor(authenticationService: IAuthService) {
        this.authenticationService = authenticationService;
    }

    execute() {
        return this.authenticationService.logout();
    }
}
