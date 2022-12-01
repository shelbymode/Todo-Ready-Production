import { User } from "@prisma/client";
import { TUserOptionsSignup } from "../Auth/infrastructure/Service/auth.service.types";

export interface IUserService {
    create(userOptions: TUserOptionsSignup): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
