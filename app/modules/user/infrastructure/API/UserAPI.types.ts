import { AsyncData } from "#app";
import { ICRUDRepository } from "~~/app/shared/types";
import { TUserParserInputData } from "../../domain/validation/userDataSchema.types";

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
        body,
    }: {
        id: string;
        body: TUserParserInputData;
    }): Promise<
        AsyncData<
            TUserParserInputData,
            true | { message: string; name: string }
        >
    >;
}
