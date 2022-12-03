import { User } from "@prisma/client";
import { TUserOptionsSignup } from "~~/backend/Auth/services/auth.service.types";

export interface IUserService {
    create(userOptions: TUserOptionsSignup): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
