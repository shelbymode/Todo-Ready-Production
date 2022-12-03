import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/services/auth.service.types";
import { FetchResultClient } from "../../common/types";
import {
    ILoginResponse,
    ISignupResponse,
    ILogoutResponse,
} from "../../common/types/response.types";

export interface IAuthService {
    login(userOptions: TUserOptionsLogin): FetchResultClient<ILoginResponse>;
    signup(userOptions: TUserOptionsSignup): FetchResultClient<ISignupResponse>;
    logout(): FetchResultClient<ILogoutResponse>;
}
