import { FetchResult } from "~~/app/shared/types";
import { User } from "@prisma/client";
import { UserService } from "~~/src/User/user.service";
import { ITokenResponse } from "./jwt.service.types";

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
    login(userOptions: TUserOptionsLogin): FetchResult<ITokenResponse>;
    signup(
        userOptions: TUserOptionsSignup
    ): FetchResult<{ data: User; error: null }>;
    logout(): void;
}
