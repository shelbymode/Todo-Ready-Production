import { User } from "@prisma/client";
import { EndResult } from "~~/shared/types";
import {
    IUserToDomainResponse,
    IUsersToDomainResponse,
} from "../../common/types/response.types";

export type TFilterOption = {
    filter: string;
    value: string | number | boolean | null;
};

export interface IUserRepositoryService {
    createUser(body: User): EndResult<IUserToDomainResponse>;
    getUserById(id: string): EndResult<IUserToDomainResponse>;
    getAllUsers(): EndResult<IUsersToDomainResponse>;
    getUsersByFilter(
        filterOption: TFilterOption
    ): EndResult<IUsersToDomainResponse>;
    editUserById(
        id: string,
        body: Partial<User>
    ): EndResult<IUserToDomainResponse>;
    removeUserById(id: string): EndResult<IUserToDomainResponse>;
}
