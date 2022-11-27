import { connector } from "../../../../database/connection";
import { User } from "@prisma/client";
import { AuthJWTService } from "./jwt.service";
import {
    IAuthService,
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "./auth.service.types";
import { TOKEN_EXPIRY_DAYS } from "~~/app/shared/constants";
import { ITokenResponse } from "./jwt.service.types";
import { UserService } from "../../../User/user.service";

class _AuthService extends AuthJWTService implements IAuthService {
    userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    async login(userOptions: TUserOptionsLogin): Promise<ITokenResponse> {
        try {
            const potentialUser = await this.userService.findByEmail(
                userOptions.email
            );

            if (!potentialUser) return null;

            const isValidPassword = await this.isValidPassword({
                inputPassword: userOptions.password,
                userHash: potentialUser.password,
            });

            if (!isValidPassword) return null;

            const userToken = this.createToken({
                email: potentialUser.email,
                id: potentialUser.id,
            });

            return { token: userToken, tokenExpiryInDays: TOKEN_EXPIRY_DAYS };
        } catch (e) {
            console.log(e);
        }
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
