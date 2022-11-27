import { TAPIResponse } from "~~/app/shared/types";
import { TUserOptionsLogin } from "~~/src/Auth/infrastructure/Service/auth.service.types";

export interface IAuthAPI {
    login(userOptions: TUserOptionsLogin): TAPIResponse;
}
