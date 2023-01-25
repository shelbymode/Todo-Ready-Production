import { ResultAsync, Result } from "neverthrow";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NuxtError } from "#app";
import { TOKEN_EXPIRY_DAYS } from "~~/shared/constants";
import {
    IAuthJWTService,
    TPasswordHashOption,
    TUserTokenPayload,
} from "../application/ports";

export class AuthJWTService implements IAuthJWTService {
    isValidPassword({ inputPassword, userHash }: TPasswordHashOption) {
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
    createToken({ email, id }: TUserTokenPayload): Result<string, NuxtError> {
        const safeSignJWT = Result.fromThrowable(
            () =>
                JWT.sign(
                    { email, id },
                    process.env.JWT_TOKEN_SECRET as string,
                    {
                        expiresIn: `${TOKEN_EXPIRY_DAYS}d`,
                    }
                ),
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
            () => JWT.verify(token, process.env.JWT_TOKEN_SECRET as string),
            () => {
                return createError({
                    statusCode: 404,
                    message: "Verify token error",
                });
            }
        );

        return verifyToken().map((decoded) => {
            return {
                id: (decoded as JWT.JwtPayload).id,
                email: (decoded as JWT.JwtPayload).email,
            };
        });
    }
}
