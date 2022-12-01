import { ILoginResponse } from "./../../../../shared/types/response.types";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/src/Auth/infrastructure/Service/auth.service.types";
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
}
