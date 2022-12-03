import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/services/auth.service.types";
import { HttpService } from "~~/client/modules/core/infrastructure/http.service";
import { FetchResultClient } from "../../common/types";
import {
    DatelessResponse,
    ISignupResponse,
} from "../../common/types/response.types";
import { IAuthService } from "../application/ports";
import { AuthAPI } from "./API/auth.api";

// AdapterImpl class must implements ServiceInterface
class AuthAdapter implements IAuthService {
    httpService: HttpService;
    fetchAPI: AuthAPI;
    constructor() {
        this.httpService = new HttpService();
        this.fetchAPI = new AuthAPI();
    }
    login(userOptions: TUserOptionsLogin): FetchResultClient<DatelessResponse> {
        return this.httpService.run(() => this.fetchAPI.login(userOptions));
    }
    signup(
        userOptions: TUserOptionsSignup
    ): FetchResultClient<ISignupResponse> {
        return this.httpService.run(() => this.fetchAPI.signup(userOptions));
    }
    logout(): FetchResultClient<DatelessResponse> {
        return this.httpService.run(() => this.fetchAPI.logout());
    }
}

export { AuthAdapter };
