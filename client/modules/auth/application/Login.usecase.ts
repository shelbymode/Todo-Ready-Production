import { UseCaseCore } from "~~/client/modules/core/application/core.usecase";
import { ILoginResponse } from "~~/client/shared/types/response.types";
import { TUserOptionsLogin } from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import { AuthClientService } from "../infrastructure/Service/auth.service";

export class Login extends UseCaseCore<TUserOptionsLogin, ILoginResponse> {
    constructor() {
        super((userOptions: TUserOptionsLogin) => {
            const authClientService = new AuthClientService();
            return authClientService.login({
                email: userOptions.email,
                password: userOptions.password,
            });
        });
    }
}
