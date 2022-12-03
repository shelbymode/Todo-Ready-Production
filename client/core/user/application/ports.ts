import { User } from "@prisma/client";
import { FetchResultClient } from "../../common/types";
import {
    IUserToDomainResponse,
    IUsersToDomainResponse,
} from "../../common/types/response.types";

export type TFilterOption = {
    field: string;
    value: string | number | boolean | null;
};

export interface IUserRepositoryService {
    createUser(body: User): FetchResultClient<IUserToDomainResponse>;
    getUserById(id: string): FetchResultClient<IUserToDomainResponse>;
    getAllUsers(): FetchResultClient<IUsersToDomainResponse>;
    getUsersByFilter(
        filterOption: TFilterOption
    ): FetchResultClient<IUsersToDomainResponse>;
    editUserById(
        id: string,
        body: Partial<User>
    ): FetchResultClient<IUserToDomainResponse>;
    removeUserById(id: string): FetchResultClient<IUserToDomainResponse>;
}
