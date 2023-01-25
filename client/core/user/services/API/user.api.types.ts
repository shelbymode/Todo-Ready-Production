import { User } from "@prisma/client";
import {
    IUserResponse,
    IUsersResponse,
    TAPIResponse,
} from "~~/client/core/common/types/response.types";
import { TFilterOption } from "../../application/ports";

export interface IUserAPI {
    createUser(body: User): TAPIResponse<IUserResponse>;
    getUserById(id: string): TAPIResponse<IUserResponse>;
    getAllUsers(): TAPIResponse<IUsersResponse>;
    getUsersByFilter(filterOption: TFilterOption): TAPIResponse<IUsersResponse>;
    editUserById(id: string, body: Partial<User>): TAPIResponse<IUserResponse>;
    removeUserById(id: string): TAPIResponse<IUserResponse>;
}
