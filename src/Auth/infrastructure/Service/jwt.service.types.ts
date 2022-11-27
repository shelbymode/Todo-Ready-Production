import JWT from "jsonwebtoken";

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
    }): Promise<boolean>;
    createToken({ email, id }: { email: string; id: string }): TToken;
    getUserFromVerificationToken(token: string): Promise<TUserTokenPayload>;
}
