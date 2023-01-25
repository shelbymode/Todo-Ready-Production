import { H3Event } from "h3";
import { FetchResultServer } from "~~/shared/types";
import { NuxtError } from "#app";
import { Result, ResultAsync } from "neverthrow";
import JWT from "jsonwebtoken";
import { UserEntity } from "~~/backend/User/domain/user.entity";

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

export type TToken = string;
export type TVerifiedToken = string | JWT.JwtPayload;

export type TUserTokenPayload = {
    id: string;
    email: string;
};
export interface ITokenResponse {
    token: TToken;
    tokenExpiryInDays: number;
}

export type TPasswordHashOption = {
    inputPassword: string;
    userHash: string;
};

export interface IAuthService {
    login(userOptions: TUserOptionsLogin): FetchResultServer<ITokenResponse>;
    signup(userOptions: TUserOptionsSignup): FetchResultServer<UserEntity>;
    setLoginCookie(event: H3Event, potentialUserToken: ITokenResponse): void;
}

export interface IAuthJWTService {
    plainStringToHash(plain: string): string;
    isValidPassword(
        passwordHashOption: TPasswordHashOption
    ): ResultAsync<boolean, NuxtError>;
    createToken(tokenOption: TUserTokenPayload): Result<TToken, NuxtError>;
    getUserFromVerificationToken(
        token: string
    ): Result<TUserTokenPayload, NuxtError>;
}
