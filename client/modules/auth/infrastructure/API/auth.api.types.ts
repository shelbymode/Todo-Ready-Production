import { TAPIResponse } from "~~/client/shared/types";
import { TUserOptionsLogin } from "~~/backend/Auth/infrastructure/Service/auth.service.types";

export interface IAuthAPI {
    login(userOptions: TUserOptionsLogin): TAPIResponse;
}
