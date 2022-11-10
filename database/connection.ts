import { PrismaClient } from "@prisma/client";

export const connect = () => {
    return new PrismaClient();
};

export const disconnect = async (connection: PrismaClient): Promise<void> => {
    return connection.$disconnect();
};

export const connector = connect();
