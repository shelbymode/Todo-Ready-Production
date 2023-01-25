import { FetchResult } from "../../../shared/types/index";
import { TFilterOption } from "~~/client/core/user/application/ports";
import { User } from "@prisma/client";
import { UserEntity } from "../domain/user.entity";

export interface IUserService {
    createUser(body: User): FetchResult<UserEntity | null>;
    getUserById(id: string): FetchResult<UserEntity | null>;
    getAllUsers(): FetchResult<UserEntity[] | null>;
    getUserByFilter(
        filterOption: TFilterOption
    ): FetchResult<UserEntity | null>;
    getUsersByFilter(
        filterOption: TFilterOption
    ): FetchResult<UserEntity[] | null>;
    editUserById(
        id: string,
        body: Partial<User>
    ): FetchResult<UserEntity | null>;
    removeUserById(id: string): FetchResult<UserEntity | null>;
}
