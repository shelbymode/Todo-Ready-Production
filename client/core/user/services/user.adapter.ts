import { User } from "@prisma/client";
import { HttpService } from "~~/client/modules/core/infrastructure/http.service";
import { FetchResultClient } from "../../common/types";
import {
    IUserToDomainResponse,
    IUsersToDomainResponse,
} from "../../common/types/response.types";
import { IUserRepositoryService, TFilterOption } from "../application/ports";
import { UserEntity } from "../domain/user.entity";
import { UserAPI } from "./API/user.api";

class UserRepositoryAdapter implements IUserRepositoryService {
    httpService: HttpService;
    fetchAPI: UserAPI;
    constructor() {
        this.httpService = new HttpService();
        this.fetchAPI = new UserAPI();
    }
    createUser(body: User): FetchResultClient<IUserToDomainResponse> {
        const fetchUserResponse = this.httpService.run(() =>
            this.fetchAPI.createUser(body)
        );
        return fetchUserResponse.map(({ data: userDTO, message }) => ({
            data: new UserEntity(userDTO),
            message,
        }));
    }
    getUserById(id: string): FetchResultClient<IUserToDomainResponse> {
        const fetchUserResponse = this.httpService.run(() =>
            this.fetchAPI.getUserById(id)
        );
        return fetchUserResponse.map(({ data: userDTO, message }) => ({
            data: new UserEntity(userDTO),
            message,
        }));
    }
    getAllUsers(): FetchResultClient<IUsersToDomainResponse> {
        const fetchUsersResponse = this.httpService.run(() =>
            this.fetchAPI.getAllUsers()
        );
        return fetchUsersResponse.map(({ data: usersDTO, message }) => ({
            data: usersDTO.map((userDTO) => new UserEntity(userDTO)),
            message,
        }));
    }
    getUsersByFilter(
        filterOption: TFilterOption
    ): FetchResultClient<IUsersToDomainResponse> {
        const fetchUsersResponse = this.httpService.run(() =>
            this.fetchAPI.getUsersByFilter(filterOption)
        );
        return fetchUsersResponse.map(({ data: usersDTO, message }) => ({
            data: usersDTO.map((userDTO) => new UserEntity(userDTO)),
            message,
        }));
    }
    editUserById(
        id: string,
        body: Partial<User>
    ): FetchResultClient<IUserToDomainResponse> {
        const fetchUserResponse = this.httpService.run(() =>
            this.fetchAPI.editUserById(id, body)
        );
        return fetchUserResponse.map(({ data: userDTO, message }) => ({
            data: new UserEntity(userDTO),
            message,
        }));
    }
    removeUserById(id: string): FetchResultClient<IUserToDomainResponse> {
        const fetchUserResponse = this.httpService.run(() =>
            this.fetchAPI.removeUserById(id)
        );
        return fetchUserResponse.map(({ data: userDTO, message }) => ({
            data: new UserEntity(userDTO),
            message,
        }));
    }
}

export { UserRepositoryAdapter };
