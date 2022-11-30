import { FetchResult } from "./../../../shared/types/index";
import { EndResult } from "~~/app/shared/types";
import { TUserOptionsLogin } from "~~/src/Auth/infrastructure/Service/auth.service.types";

export type LoginResponse = any;

export interface IAuthRepository {
    login(userOptions: TUserOptionsLogin): FetchResult<LoginResponse>;
}
