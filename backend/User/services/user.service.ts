import { HttpError } from "../../../client/core/common/Error/http.error";
import { User } from "@prisma/client";
import { ResultAsync } from "neverthrow";
import { TFilterOption } from "~~/client/core/user/application/ports";
import { IUserService } from "../application/ports";
import { UserDBRepository } from "../data/UserDBRepository";
import { UserEntity } from "../domain/user.entity";

export class _UserService implements IUserService {
    constructor(public userDBRepository: UserDBRepository) {}

    createUser(body: Omit<User, "role" | "createdAt" | "updatedAt">) {
        return ResultAsync.fromPromise(
            this.userDBRepository.create(body),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((user) => new UserEntity(user));
    }
    getUserById(id: string) {
        return ResultAsync.fromPromise(
            this.userDBRepository.getOneById(id),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((user) => new UserEntity(user));
    }
    getAllUsers() {
        return ResultAsync.fromPromise(
            this.userDBRepository.getMany(),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((users) => users.map((user) => new UserEntity(user)));
    }
    getUserByFilter(filterOption: TFilterOption) {
        return ResultAsync.fromPromise(
            this.userDBRepository.getOneByFilter(filterOption),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((user) => new UserEntity(user));
    }
    getUsersByFilter(filterOption: TFilterOption) {
        return ResultAsync.fromPromise(
            this.userDBRepository.getManyByFilter(filterOption),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((users) => users.map((user) => new UserEntity(user)));
    }
    editUserById(id: string, body: Partial<User>) {
        return ResultAsync.fromPromise(
            this.userDBRepository.editById(id, body),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((user) => new UserEntity(user));
    }
    removeUserById(id: string) {
        return ResultAsync.fromPromise(
            this.userDBRepository.removeById(id),
            () => new HttpError({ message: "DB Error", statusCode: 500 })
        ).map((user) => new UserEntity(user));
    }
}
