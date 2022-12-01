import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import {
    ISignupResponse,
    ILogoutResponse,
    TAPIResponse,
    ILoginResponse,
} from "~~/client/shared/types/response.types";

export interface IAuthAPI {
    login(userOptions: TUserOptionsLogin): TAPIResponse<ILoginResponse>;
    signup(userOptions: TUserOptionsSignup): TAPIResponse<ISignupResponse>;
    logout(): TAPIResponse<ILogoutResponse>;
}
