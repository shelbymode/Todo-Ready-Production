import { AsyncData } from "#app";
import { BASE_URL } from "~~/app/shared/utils/constants";
import { TUserParserInputData } from "../../domain/validation/userDataSchema.types";
import { IUserAPI } from "./UserAPI.types";

export class UserAPI implements IUserAPI {
    async getOne(
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
    async getMany(): Promise<
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
    async create(
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
    async remove(
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
    async edit({
        id,
        body,
    }: {
        id: string;
        body: TUserParserInputData;
    }): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/users/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: body,
        });
    }
}
