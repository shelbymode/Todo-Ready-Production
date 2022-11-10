import { Prisma, User } from "@prisma/client";
import { UserService } from "~~/src/User/user.service";

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
    login(userOptions: TUserOptionsLogin): Promise<{ token: string; tokenExpiryInDays: number }>;
    signup(userOptions: TUserOptionsSignup): Promise<{ data: User; error: null }>;
    logout(): void;
}
