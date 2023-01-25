import { User } from "@prisma/client";
import { TUserDTO } from "~~/shared/types/dto.types";

export type UserName = string;
export type UniqueId = string;
export type Email = string;
export type EmailDomain = string;

class UserEntity {
    private user: User | null = null;
    constructor(user: User | null) {
        this.user = user;
    }
    get() {
        return this.user;
    }
    toDTO(): TUserDTO | null {
        if (!this.user) return null;

        const { id, name, email, role, createdAt, updatedAt } = this.user;
        const isOnceUpdated = Number(updatedAt) !== Number(createdAt);
        return { id, name, email, role, createdAt, updatedAt, isOnceUpdated };
    }
}

export { UserEntity };
