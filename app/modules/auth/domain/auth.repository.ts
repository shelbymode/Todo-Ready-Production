import { EndResult } from "~~/app/shared/types";
import { TUserOptionsLogin } from "~~/src/Auth/infrastructure/Service/auth.service.types";

export interface IAuthRepository {
    login(userOptions: TUserOptionsLogin): EndResult<any>;
}
