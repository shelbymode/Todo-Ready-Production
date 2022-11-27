import { TOKEN_EXPIRY_DAYS } from "~~/app/shared/constants";
import {
    IAuthJWTService,
    TUserTokenPayload,
    TVerifiedToken,
} from "./jwt.service.types";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthJWTService implements IAuthJWTService {
    async isValidPassword({
        inputPassword,
        userHash,
    }: {
        inputPassword: string;
        userHash: string;
    }) {
        return await bcrypt.compare(inputPassword, userHash);
    }
    plainStringToHash(plain: string): string {
        return bcrypt.hashSync(plain, 10);
    }
    createToken({ email, id }: { email: string; id: string }): string {
        return JWT.sign({ email, id }, process.env.JWT_TOKEN_SECRET, {
            expiresIn: `${TOKEN_EXPIRY_DAYS}d`,
        });
    }
    async getUserFromVerificationToken(
        token: string
    ): Promise<TUserTokenPayload> {
        try {
            const decoded = (await JWT.verify(
                token,
                process.env.JWT_TOKEN_SECRET
            )) as TUserTokenPayload;
            return {
                id: decoded.id,
                email: decoded.email,
            };
        } catch (e) {
            return null;
        }
    }
}
