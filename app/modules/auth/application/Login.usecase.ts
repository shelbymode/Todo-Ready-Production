import { UseCaseCore } from "~~/app/modules/core/application/core.usecase";
import { TUserOptionsLogin } from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { ITokenResponse } from "~~/src/Auth/infrastructure/Service/jwt.service.types";
import { AuthService } from "../infrastructure/Service/auth.service";

export class Login extends UseCaseCore<TUserOptionsLogin, unknown> {
    constructor() {
        super((userOptions: TUserOptionsLogin) => {
            const authService = new AuthService();
            return authService.login({
                email: userOptions.email,
                password: userOptions.password,
            });
        });
    }
}
