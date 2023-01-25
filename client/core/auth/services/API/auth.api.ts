import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/services/auth.service.types";
import {
    TAPIResponse,
    ILoginResponse,
    ISignupResponse,
    ILogoutResponse,
} from "~~/client/core/common/types/response.types";
import { BASE_URL } from "~~/shared/utils/constants";
import { IAuthAPI } from "./auth.api.types";

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
