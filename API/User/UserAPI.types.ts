import { AsyncData } from "#app";
import { TUserParserOutputData } from "~~/parser/User/UserParser.types";

export interface IUserAPI {
    getOneUser(id: string): AsyncData<unknown, true>;
    getAllUsers(): AsyncData<unknown, true>;
    createUser(user: TUserParserOutputData): AsyncData<unknown, true>;
    removeUser(id: string): AsyncData<unknown, true>;
    editUser({
        id,
        user,
    }: {
        id: string;
        user: TUserParserOutputData;
    }): AsyncData<unknown, true>;
}
