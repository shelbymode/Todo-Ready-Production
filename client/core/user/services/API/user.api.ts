import { NuxtError } from "#app";
import { User } from "@prisma/client";
import {
    TAPIResponse,
    IUserResponse,
    IUsersResponse,
} from "~~/client/core/common/types/response.types";
import { BASE_URL } from "~~/shared/utils/constants";
import { TFilterOption } from "../../application/ports";
import { IUserAPI } from "./user.api.types";

export class UserAPI implements IUserAPI {
    createUser(body: User): TAPIResponse<IUserResponse, NuxtError> {
        return useLazyFetch(`/api/user/create`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: body,
        });
    }
    getUserById(id: string): TAPIResponse<IUserResponse, NuxtError> {
        return useLazyFetch(`/api/user/getById`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
            params: { id },
        });
    }
    getAllUsers(): TAPIResponse<IUsersResponse, NuxtError> {
        return useLazyFetch(`/api/user/getAll`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
        });
    }
    getUsersByFilter(
        filterOption: TFilterOption
    ): TAPIResponse<IUsersResponse, NuxtError> {
        return useLazyFetch(`/api/user/getByFilter`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
            params: { filterOption },
        });
    }
    editUserById(
        id: string,
        body: Partial<User>
    ): TAPIResponse<IUserResponse, NuxtError> {
        return useLazyFetch(`/api/user/editById`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            params: { id },
            body: body,
        });
    }
    removeUserById(id: string): TAPIResponse<IUserResponse, NuxtError> {
        return useLazyFetch(`/api/user/removeById`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            params: { id },
        });
    }
}
