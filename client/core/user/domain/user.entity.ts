import { Role } from "@prisma/client";
import { UserDTO } from "../../common/types/response.types";

export type UserName = string;
export type UniqueId = string;
export type Email = string;

export type TUser = {
    id: UniqueId;
    name: UserName;
    email: Email;
    role: Role;
    createdAt: Date;
    mailDomain: string;
};

class UserEntity {
    user: TUser;
    constructor(user: UserDTO) {
        this.user = this.toDomain(user);
    }
    get() {
        return this.user;
    }
    toDomain(user: UserDTO): TUser {
        const { id, name, email, role, createdAt } = user;
        return {
            id,
            name,
            email,
            role,
            createdAt,
            mailDomain: this.extractDomain(email),
        };
    }
    extractDomain(email: string) {
        return email.split("@").at(-1).split(".").at(0);
    }
    isBelongsToEmailDomain(mailDomain: string): boolean {
        return this.user.mailDomain === mailDomain;
    }
}

export { UserEntity };
