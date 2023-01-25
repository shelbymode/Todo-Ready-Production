import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/services/auth.service.types";
import { FetchResult } from "~~/shared/types";
import {
    ILoginResponse,
    ISignupResponse,
    ILogoutResponse,
} from "../../common/types/response.types";

export interface IAuthService {
    login(userOptions: TUserOptionsLogin): FetchResult<ILoginResponse>;
    signup(userOptions: TUserOptionsSignup): FetchResult<ISignupResponse>;
    logout(): FetchResult<ILogoutResponse>;
}
