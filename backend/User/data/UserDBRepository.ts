import { Prisma, User } from "@prisma/client";
import { TFilterOption } from "~~/client/core/user/application/ports";
/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ Atomic reusable operations with database for User schema                ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */

export class UserDBRepository {
    constructor(
        private userModel: Prisma.UserDelegate<
            Prisma.RejectOnNotFound | Prisma.RejectPerOperation
        >
    ) {}
    async getOneById(id: string) {
        return this.userModel.findUnique({
            where: {
                id,
            },
        });
    }
    async getOneByFilter(filterOption: TFilterOption) {
        const { filter, value } = filterOption;
        return this.userModel.findUnique({
            where: {
                [filter]: {
                    equals: value,
                },
            },
        });
    }
    async getMany() {
        return this.userModel.findMany();
    }
    async getManyByFilter(filterOption: TFilterOption) {
        const { filter, value } = filterOption;
        return this.userModel.findMany({
            where: {
                [filter]: {
                    equals: value,
                },
            },
        });
    }
    async create(user: Omit<User, "role" | "createdAt" | "updatedAt">) {
        return this.userModel.create({
            data: {
                ...user,
            },
        });
    }
    async removeById(id: string) {
        return this.userModel.delete({
            where: {
                id,
            },
        });
    }
    async editById(id: string, body: Partial<User>) {
        return this.userModel.update({
            where: {
                id,
            },
            data: {
                ...body,
            },
        });
    }
}
