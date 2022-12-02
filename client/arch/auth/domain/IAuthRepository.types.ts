import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import { FetchResultClient } from "~~/client/shared/types";
import {
    ILoginResponse,
    ISignupResponse,
    ILogoutResponse,
} from "~~/client/shared/types/response.types";

export interface IAuthRepository {
    login(userOptions: TUserOptionsLogin): FetchResultClient<ILoginResponse>;
    signup(userOptions: TUserOptionsSignup): FetchResultClient<ISignupResponse>;
    logout(): FetchResultClient<ILogoutResponse>;
}
