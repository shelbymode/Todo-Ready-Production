import { AsyncData } from "#app";
import { TUserParserOutputData } from "~~/parser/User/UserParser.types";

export interface IUserAPI {
    getOneUser(
        id: string
    ): AsyncData<unknown, true | { message: string; name: string }>;
    getAllUsers(): AsyncData<unknown, true | { message: string; name: string }>;
    createUser(
        user: TUserParserOutputData
    ): AsyncData<unknown, true | { message: string; name: string }>;
    removeUser(
        id: string
    ): AsyncData<unknown, true | { message: string; name: string }>;
    editUser({
        id,
        user,
    }: {
        id: string;
        user: TUserParserOutputData;
    }): AsyncData<unknown, true | { message: string; name: string }>;
}
