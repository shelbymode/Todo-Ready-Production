import { UseCaseCore } from "~~/client/modules/core/application/core.usecase";
import { ILogoutResponse } from "~~/client/shared/types/response.types";
import { AuthClientService } from "../infrastructure/Service/auth.service";

export class Logout extends UseCaseCore<void, ILogoutResponse> {
    constructor() {
        super(() => {
            const authClientService = new AuthClientService();
            return authClientService.logout();
        });
    }
}
