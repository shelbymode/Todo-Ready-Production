import { TUserOptionsLogin, TUserOptionsSignup } from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { TAPIResponse } from "~~/app/shared/types";
import { BASE_URL } from "~~/app/shared/utils/constants";
import { IAuthAPI } from "./auth.api.types";

export class AuthAPI implements IAuthAPI {
    login(userOptions: TUserOptionsLogin) {
        return useLazyFetch(`/api/auth/login`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: userOptions,
        }) as TAPIResponse;
    }
    signup(userOptions: TUserOptionsSignup) {
        return useLazyFetch(`/api/auth/signup`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: userOptions,
        }) as TAPIResponse;
    }
}
