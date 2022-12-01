import { NuxtError } from "#app";
import JWT from "jsonwebtoken";
import { Result, ResultAsync } from "neverthrow";

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

export interface IAuthJWTService {
    plainStringToHash(plain: string): string;
    isValidPassword({
        inputPassword,
        userHash,
    }: {
        inputPassword: string;
        userHash: string;
    }): ResultAsync<boolean, NuxtError>;
    createToken({
        email,
        id,
    }: {
        email: string;
        id: string;
    }): Result<TToken, NuxtError>;
    getUserFromVerificationToken(
        token: string
    ): Result<TUserTokenPayload, NuxtError>;
}
