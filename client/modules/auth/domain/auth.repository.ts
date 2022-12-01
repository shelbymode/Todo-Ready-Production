import { FetchResult } from "~~/shared/types/index";
import { EndResult } from "~~/client/shared/types";
import { TUserOptionsLogin } from "~~/backend/Auth/infrastructure/Service/auth.service.types";

export type ILoginResponse = any;

export interface IAuthRepository {
    login(userOptions: TUserOptionsLogin): FetchResult<ILoginResponse>;
}
