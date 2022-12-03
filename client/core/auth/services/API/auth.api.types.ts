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

export interface IAuthAPI {
    login(userOptions: TUserOptionsLogin): TAPIResponse<ILoginResponse>;
    signup(userOptions: TUserOptionsSignup): TAPIResponse<ISignupResponse>;
    logout(): TAPIResponse<ILogoutResponse>;
}
