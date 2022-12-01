import { UseCaseCore } from "~~/client/modules/core/application/core.usecase";
import { ISignupResponse } from "~~/client/shared/types/response.types";
import { TUserOptionsSignup } from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { AuthClientService } from "../infrastructure/Service/auth.service";

export class Signup extends UseCaseCore<TUserOptionsSignup, ISignupResponse> {
    constructor() {
        super((userOptions: TUserOptionsSignup) => {
            const authClientService = new AuthClientService();
            return authClientService.signup(userOptions);
        });
    }
}
