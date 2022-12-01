import { HttpService } from "~~/client/modules/core/infrastructure/http.service";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import { IAuthRepository } from "../../domain/auth.repository";
import { AuthAPI } from "../API/auth.api";

export class AuthClientService implements IAuthRepository {
    httpService: HttpService;
    fetchAPI: AuthAPI;
    constructor() {
        this.httpService = new HttpService();
        this.fetchAPI = new AuthAPI();
    }
    login(userOptions: TUserOptionsLogin) {
        return this.httpService.run(() => this.fetchAPI.login(userOptions));
    }
    signup(userOptions: TUserOptionsSignup) {
        return this.httpService.run(() => this.fetchAPI.signup(userOptions));
    }
    logout() {
        return this.httpService.run(() => this.fetchAPI.logout());
    }
}
