import { Prisma } from "@prisma/client";
import { connector } from "../../../database/connection";

export class User {
    userModel: Prisma.UserDelegate<
        Prisma.RejectOnNotFound | Prisma.RejectPerOperation
    >;

    constructor() {
        this.userModel = connector.user;
    }
}
