import { AsyncData } from "#app";
import { TUserParserInputData } from "~~/entity/User/UserEntity.types";
import { BASE_URL } from "~~/utils/constants";
import { IUserAPI } from "./UserAPI.types";

export class UserAPI implements IUserAPI {
    async getOneUser(
        id: string
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    async getAllUsers(): Promise<
        AsyncData<
            TUserParserInputData[],
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        }) as AsyncData<
            TUserParserInputData[],
            true | { message: string; name: string }
        >;
    }
    async createUser(
        user: TUserParserInputData
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/users?createUser=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: user,
        });
    }
    async removeUser(
        id: string
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/users/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
        });
    }
    async editUser({
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
    > {
        return useFetch(`/users/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: user,
        });
    }
}
