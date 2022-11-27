import { TAPIResponse } from "~~/app/shared/types";
import { BASE_URL } from "~~/app/shared/utils/constants";
import { TUserDTO } from "../../domain/user.dto.schema";
import { IUserAPI } from "./user.api.types";

export class UserAPI implements IUserAPI {
    getOne(id: string) {
        return useLazyFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
        }) as TAPIResponse<TUserDTO>;
    }
    getMany() {
        return useLazyFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
        }) as TAPIResponse<TUserDTO[]>;
    }
    create(user: TUserDTO) {
        return useLazyFetch(`/users?createUser=true`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: user,
        }) as TAPIResponse<TUserDTO>;
    }
    remove(id: string) {
        return useLazyFetch(`/users/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
            server: false,
        }) as TAPIResponse<TUserDTO>;
    }
    edit({ id, body }: { id: string; body: TUserDTO }) {
        return useLazyFetch(`/users/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            server: false,
            body: body,
        }) as TAPIResponse<TUserDTO>;
    }
}
