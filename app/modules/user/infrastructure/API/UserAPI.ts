import { TAPIResponse } from "~~/app/shared/types";
import { BASE_URL } from "~~/app/shared/utils/constants";
import { TUserParserInputData } from "../../domain/validation/userDataSchema.types";
import { IUserAPI } from "./UserAPI.types";

export class UserAPI implements IUserAPI {
    getOne(id: string) {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        }) as TAPIResponse<TUserParserInputData>;
    }
    getMany() {
        return useFetch(`/users`, {
            method: "GET",
            baseURL: BASE_URL,
        }) as TAPIResponse<TUserParserInputData[]>;
    }
    create(user: TUserParserInputData) {
        return useFetch(`/users?createUser=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: user,
        }) as TAPIResponse<TUserParserInputData>;
    }
    remove(id: string) {
        return useFetch(`/users/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
        }) as TAPIResponse<TUserParserInputData>;
    }
    edit({ id, body }: { id: string; body: TUserParserInputData }) {
        return useFetch(`/users/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: body,
        }) as TAPIResponse<TUserParserInputData>;
    }
}
