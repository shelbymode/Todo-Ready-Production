import { User } from "@prisma/client";
import { H3Event } from "h3";
import { err, ok } from "neverthrow";
import { v4 } from "uuid";
import { _UserService } from "~~/backend/User/services/user.service";
import { TOKEN_EXPIRY_DAYS, COOKIE_AUTH_NAME } from "~~/shared/constants";
import { FetchResultServer } from "~~/shared/types";
import {
    IAuthService,
    ITokenResponse,
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "../application/ports";
import { AuthJWTService } from "./jwt.service";

export class _AuthService extends AuthJWTService implements IAuthService {
    constructor(public userService: _UserService) {
        super();
    }

    login({
        email,
        password,
    }: TUserOptionsLogin): FetchResultServer<ITokenResponse> {
        let user: User;

        return this.userService
            .getUserByFilter({
                filter: "email",
                value: email,
            })
            .andThen((potentialUserEntity) => {
                const potentialUser = potentialUserEntity.get();
                if (!potentialUser) {
                    return err(
                        createError({
                            statusCode: 400,
                            message: "User not found",
                        })
                    );
                }

                user = potentialUser;

                return ok(user);
            })
            .andThen((user) => {
                return this.isValidPassword({
                    inputPassword: password,
                    userHash: user.password,
                });
            })
            .andThen((isValidPassword) => {
                if (!isValidPassword) {
                    return err(
                        createError({
                            statusCode: 401,
                            message: "Invalid credentials",
                        })
                    );
                }
                const userToken = this.createToken({
                    email: user.email,
                    id: user.id,
                });

                return userToken;
            })
            .map((userToken) => {
                return {
                    token: userToken,
                    tokenExpiryInDays: TOKEN_EXPIRY_DAYS,
                };
            });
    }
    setLoginCookie(event: H3Event, potentialUserToken: ITokenResponse) {
        setCookie(event, COOKIE_AUTH_NAME, potentialUserToken.token, {
            expires: new Date(
                Date.now() +
                    potentialUserToken.tokenExpiryInDays * 1 * 60 * 60 * 1000
            ),
        });
    }
    signup({ email, name, password, confirmPassword }: TUserOptionsSignup) {
        return this.userService
            .getUserByFilter({
                filter: "email",
                value: email,
            })
            .andThen((potentialUserEntity) => {
                if (potentialUserEntity.get()) {
                    return err(
                        createError({
                            statusCode: 400,
                            message: "User already exists!",
                        })
                    );
                }
                if (password !== confirmPassword) {
                    return err(
                        createError({
                            statusCode: 400,
                            message: "Password aren't equal",
                        })
                    );
                }

                const body = {
                    id: v4(),
                    email,
                    name: name,
                    password: this.plainStringToHash(password),
                };

                return ok(body);
            })
            .andThen((body) => {
                return this.userService.createUser({
                    ...body,
                });
            });
    }
    clearLoginCookie(event: H3Event) {
        deleteCookie(event, COOKIE_AUTH_NAME);
    }
}
