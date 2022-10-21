import { AsyncData } from "#app";
import { TUserParserInputData } from "~~/entity/User/UserEntity.types";

export interface IUserAPI {
    getOneUser(
        id: string
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
    getAllUsers(): Promise<
        AsyncData<
            TUserParserInputData[],
            true | { message: string; name: string }
        >
    >;

    createUser(
        user: TUserParserInputData
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
    removeUser(
        id: string
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
    editUser({
        id,
        user,
    }: {
        id: string;
        user: TUserParserInputData;
    }): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
}
