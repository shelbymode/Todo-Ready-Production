import {
    ILoginResponse,
    ILogoutResponse,
} from "./../../../../shared/types/response.types";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import { BASE_URL } from "~~/client/shared/utils/constants";
import { IAuthAPI } from "./auth.api.types";
import {
    TAPIResponse,
    ISignupResponse,
} from "~~/client/shared/types/response.types";

export class AuthAPI implements IAuthAPI {
    login(userOptions: TUserOptionsLogin) {
        return useLazyFetch(`/api/auth/login`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: userOptions,
        }) as TAPIResponse<ILoginResponse>;
    }
    signup(userOptions: TUserOptionsSignup) {
        return useLazyFetch(`/api/auth/signup`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: userOptions,
        }) as TAPIResponse<ISignupResponse>;
    }
    logout() {
        return useLazyFetch(`/api/auth/logout`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
        }) as TAPIResponse<ILogoutResponse>;
    }
}
