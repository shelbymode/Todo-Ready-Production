import { AsyncData } from "#app";
import { TUserParserInputData } from "~~/entity/User/UserEntity.types";
import { ICRUDRepository } from "~~/shared/types";

export interface IUserAPI extends ICRUDRepository<TUserParserInputData> {
    getOne(
        id: string
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
    getMany(): Promise<
        AsyncData<
            TUserParserInputData[],
            true | { message: string; name: string }
        >
    >;

    create(
        user: TUserParserInputData
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
    remove(
        id: string
    ): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
    edit({
        id,
        user,
    }: {
        id: string;
        user: TUserParserInputData;
    }): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
}
