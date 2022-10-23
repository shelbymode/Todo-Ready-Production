import { AsyncData } from "#app";
import { TAPIResponse } from "~~/app/shared/types";
import { BASE_URL } from "~~/app/shared/utils/constants";
import { TUserParserInputData } from "../../domain/validation/userDataSchema.types";
import { IUserAPI } from "./UserAPI.types";

export class UserAPI implements IUserAPI {
    async getOne(id: string): TAPIResponse<TUserParserInputData> {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    async getMany(): TAPIResponse<TUserParserInputData[]> {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        }) as Awaited<TAPIResponse<TUserParserInputData[]>>;
    }
    async create(
        user: TUserParserInputData
    ): TAPIResponse<TUserParserInputData> {
        return useFetch(`/users?createUser=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: user,
        });
    }
    async remove(id: string): TAPIResponse<TUserParserInputData> {
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
    }): TAPIResponse<TUserParserInputData> {
        return useFetch(`/users/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: body,
        });
    }
}
