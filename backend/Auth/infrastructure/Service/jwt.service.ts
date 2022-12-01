import { ResultAsync, Result } from "neverthrow";
import { TOKEN_EXPIRY_DAYS } from "~~/client/shared/constants";
import { IAuthJWTService, TUserTokenPayload } from "./jwt.service.types";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NuxtError } from "#app";

export class AuthJWTService implements IAuthJWTService {
    isValidPassword({
        inputPassword,
        userHash,
    }: {
        inputPassword: string;
        userHash: string;
    }) {
        return ResultAsync.fromPromise(
            bcrypt.compare(inputPassword, userHash),
            () =>
                createError({
                    statusCode: 500,
                    message: "Error comparing passwords",
                })
        );
    }
    plainStringToHash(plain: string): string {
        return bcrypt.hashSync(plain, 10);
    }
    createToken({
        email,
        id,
    }: {
        email: string;
        id: string;
    }): Result<string, NuxtError> {
        const safeSignJWT = Result.fromThrowable(
            () =>
                JWT.sign({ email, id }, process.env.JWT_TOKEN_SECRET, {
                    expiresIn: `${TOKEN_EXPIRY_DAYS}d`,
                }),
            () =>
                createError({
                    statusCode: 500,
                    message: "Error JWT sign",
                })
        );

        return safeSignJWT();
    }
    getUserFromVerificationToken(
        token: string
    ): Result<TUserTokenPayload, NuxtError> {
        const verifyToken = Result.fromThrowable(
            () => JWT.verify(token, process.env.JWT_TOKEN_SECRET),
            () => {
                return createError({
                    statusCode: 404,
                    message: "Verify token error",
                });
            }
        );

        return verifyToken().map((decoded: JWT.JwtPayload) => {
            return {
                id: decoded.id,
                email: decoded.email,
            };
        });
    }
}
