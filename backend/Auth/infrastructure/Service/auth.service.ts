import { COOKIE_AUTH_NAME } from "./../../../../client/shared/constants";
import { ITokenResponse } from "~~/backend/Auth/infrastructure/Service/jwt.service.types";
import { FetchResultServer } from "~~/client/shared/types/index";
import { connector } from "../../../../database/connection";
import { User } from "@prisma/client";
import { AuthJWTService } from "./jwt.service";
import {
    IAuthService,
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "./auth.service.types";
import { TOKEN_EXPIRY_DAYS } from "~~/client/shared/constants";
import { UserService } from "../../../User/user.service";
import { err, ok, ResultAsync } from "neverthrow";
import { H3Event } from "h3";

class _AuthServerService extends AuthJWTService implements IAuthService {
    userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    login(userOptions: TUserOptionsLogin): FetchResultServer<ITokenResponse> {
        let user: User;

        return ResultAsync.fromPromise(
            this.userService.findByEmail(userOptions.email),
            () => {
                return createError({
                    statusCode: 500,
                    message: "DB Error (find by email)",
                });
            }
        )
            .andThen((potentialUser) => {
                if (!potentialUser) {
                    return err(
                        createError({
                            statusCode: 400,
                            message: "User not found",
                        })
                    );
                }
                user = potentialUser;
                return ok(potentialUser);
            })
            .andThen((user) => {
                return this.isValidPassword({
                    inputPassword: userOptions.password,
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
                    potentialUserToken.tokenExpiryInDays * 24 * 60 * 60 * 1000
            ),
        });
    }
    signup(userOptions: TUserOptionsSignup): FetchResultServer<User> {
        return ResultAsync.fromPromise(
            this.userService.findByEmail(userOptions.email),
            (e) => {
                console.log(e);

                return createError({
                    statusCode: 500,
                    message: "DB Error (find by email)",
                });
            }
        ).andThen((potentialUser) => {
            if (potentialUser) {
                return err(
                    createError({
                        statusCode: 400,
                        message: "User already exists!",
                    })
                );
            }
            if (userOptions.password !== userOptions.confirmPassword) {
                return err(
                    createError({
                        statusCode: 400,
                        message: "Password aren't equal",
                    })
                );
            }

            const { email, name } = userOptions;
            const hashedPassword = this.plainStringToHash(userOptions.password);

            return ResultAsync.fromPromise(
                this.userService.create({
                    email,
                    name,
                    password: hashedPassword,
                }),
                () => {
                    return createError({
                        statusCode: 500,
                        message: "DB Error (create user)",
                    });
                }
            );
        });
    }
    clearLoginCookie(event: H3Event) {
        deleteCookie(event, COOKIE_AUTH_NAME);
    }
}
const AuthServerService = new _AuthServerService(
    new UserService(connector.user)
);

export { AuthServerService };
