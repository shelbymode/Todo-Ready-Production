import { AsyncData, NuxtError } from "#app";
import { TUserDTO } from "~~/shared/types/dto.types";
import { UserEntity } from "../../user/domain/user.entity";
import { HttpError } from "../Error/http.error";

/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ General response-related types                                          ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */

export type ISuccessResponse<T> = T extends NuxtError ? never : T;

export interface DatelessResponse {
    message: string;
}

export type TAPIResponse<Data, Error = NuxtError> = AsyncData<
    Data | null,
    { data: Error } | null
>;

/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ Specific response-related types                                         ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */

/* Auth section */

//* Format from the server (response)

export interface ISignupResponse {
    message: string;
    data: TUserDTO;
}

export type ILoginResponse = DatelessResponse;

export type ILogoutResponse = DatelessResponse;

/* User section */

export interface IUserResponse {
    message: string;
    data: TUserDTO;
}
export interface IUsersResponse {
    message: string;
    data: TUserDTO[];
}
export interface IUserToDomainResponse {
    data: UserEntity;
    message: string;
}

export interface IUsersToDomainResponse {
    message: string;
    data: UserEntity[];
}
// Type '{ data: UserEntity; message: string; }' is not assignable to type 'IUserToDomainResponse'
/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ Helper functions for response types                                      ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */

export const SuccessResponse = <T>(
    message: string,
    data?: ISuccessResponse<T>
) => ({
    message,
    data,
});

export const FailResponse = (error: HttpError | NuxtError) => error;
