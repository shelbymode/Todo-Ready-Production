import { ITokenResponse } from "~~/src/Auth/infrastructure/Service/jwt.service.types";
import { FetchResultServer } from "./../../../../app/shared/types/index";
import { connector } from "../../../../database/connection";
import { User } from "@prisma/client";
import { AuthJWTService } from "./jwt.service";
import {
    IAuthService,
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "./auth.service.types";
import { TOKEN_EXPIRY_DAYS } from "~~/app/shared/constants";
import { UserService } from "../../../User/user.service";
import { err, ok, okAsync, ResultAsync } from "neverthrow";
import { H3Event } from "h3";

class _AuthService extends AuthJWTService implements IAuthService {
    userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    login(userOptions: TUserOptionsLogin): FetchResultServer<ITokenResponse> {
        let user: User;

        return ResultAsync.fromPromise(
            this.userService.findByEmail(userOptions.email),
            (e) => {
                return createError({
                    statusCode: 500,
                    message: "DB Error",
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
        setCookie(event, "todo-production-user", potentialUserToken.token, {
            expires: new Date(
                Date.now() +
                    potentialUserToken.tokenExpiryInDays * 24 * 60 * 60 * 1000
            ),
        });
        return { data: "Success authorization!", error: null };
    }
    async signup(
        userOptions: TUserOptionsSignup
    ): Promise<{ data: User; error: null }> {
        if (userOptions.password !== userOptions.confirmPassword) return null;

        const potentialUser = await this.userService.findByEmail(
            userOptions.email
        );

        if (potentialUser) return null;

        const { email, name } = userOptions;
        const hashedPassword = this.plainStringToHash(userOptions.password);

        const newUser = await this.userService.create({
            email,
            name,
            password: hashedPassword,
        });

        console.log("user was created!", newUser);

        return { data: newUser, error: null };
    }
    logout(): void {
        throw new Error("Method not implemented.");
    }
}
const AuthService = new _AuthService(new UserService(connector.user));

export { AuthService };
