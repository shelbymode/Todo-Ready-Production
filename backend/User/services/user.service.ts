import { Prisma } from "@prisma/client";
import { v4 } from "uuid";
import { TUserOptionsSignup } from "~~/backend/Auth/services/auth.service.types";
import { IUserService } from "./user.service.types";

export class UserService implements IUserService {
    constructor(
        private userModel: Prisma.UserDelegate<
            Prisma.RejectOnNotFound | Prisma.RejectPerOperation
        >
    ) {}
    async findByEmail(email: string) {
        return this.userModel.findUnique({
            where: {
                email,
            },
        });
    }

    create(userOptions: Omit<TUserOptionsSignup, "confirmPassword">) {
        return this.userModel.create({
            data: {
                id: v4(),
                email: userOptions.email,
                name: userOptions.name,
                password: userOptions.password,
            },
        });
    }
}
