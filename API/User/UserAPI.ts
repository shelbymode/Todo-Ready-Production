import { AsyncData } from "#app";
import { TUserParserOutputData } from "~~/parser/User/UserParser.types";
import { BASE_URL } from "~~/utils/constants";
import { IUserAPI } from "./UserAPI.types";

export class UserAPI implements IUserAPI {
    getOneUser(id: string): AsyncData<unknown, true> {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    getAllUsers(): AsyncData<unknown, true> {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    createUser(user: TUserParserOutputData): AsyncData<unknown, true> {
        return useFetch(`/users?createUser=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: user,
        });
    }
    removeUser(id: string): AsyncData<unknown, true> {
        return useFetch(`/users/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
        });
    }
    editUser({
        id,
        user,
    }: {
        id: string;
        user: TUserParserOutputData;
    }): AsyncData<unknown, true> {
        return useFetch(`/users/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: user,
        });
    }
}
