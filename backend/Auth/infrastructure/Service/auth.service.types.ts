import { FetchResultServer } from "~~/client/shared/types";
import { User } from "@prisma/client";
import { UserService } from "~~/backend/User/user.service";
import { ITokenResponse } from "./jwt.service.types";
import { H3Event } from "h3";

export type TUserOptionsLogin = {
    email: string;
    password: string;
};

export type TUserOptionsSignup = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
};

export interface IAuthService {
    userService: UserService;
    login(userOptions: TUserOptionsLogin): FetchResultServer<ITokenResponse>;
    signup(userOptions: TUserOptionsSignup): FetchResultServer<User>;
    setLoginCookie(event: H3Event, potentialUserToken: ITokenResponse): void;
    clearLoginCookie(event: H3Event): void;
}
