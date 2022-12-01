import { AsyncData, NuxtError } from "#app";
import { User } from "@prisma/client";

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
    { data: Error | null }
>;

/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ Specific response-related types                                         ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */

export interface ISignupResponse {
    message: string;
    data: Omit<User, "password">;
}

export type ILoginResponse = DatelessResponse;

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

export const FailResponse = (error: NuxtError) => error;
