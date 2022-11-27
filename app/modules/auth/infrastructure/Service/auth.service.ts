import { HttpService } from "~~/app/modules/core/infrastructure/http.service";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { IAuthRepository } from "../../domain/auth.repository";
import { AuthAPI } from "../API/auth.api";

export class AuthService implements IAuthRepository {
    httpService: HttpService;
    fetchAPI: AuthAPI;
    constructor() {
        this.httpService = new HttpService();
        this.fetchAPI = new AuthAPI();
    }
    async login(userOptions: TUserOptionsLogin) {
        const fetchedData = await this.httpService.run(() =>
            this.fetchAPI.login(userOptions)
        );

        if (fetchedData.isOk()) {
            return fetchedData.value;
        } else return fetchedData.error;
    }
    async signup(userOptions: TUserOptionsSignup) {
        const fetchedData = await this.httpService.run(() =>
            this.fetchAPI.signup(userOptions)
        );

        if (fetchedData.isOk()) {
            return fetchedData.value;
        } else return fetchedData.error;
    }
}
