import { AsyncData } from "#app";
import { TTaskParserInputData } from "~~/entity/Task/TaskEntity.types";
import { ICRUDRepository } from "~~/shared/types";

export interface ITaskAPI extends ICRUDRepository<TTaskParserInputData> {
    getOne(
        id: string
    ): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    >;
    getMany(): Promise<
        AsyncData<
            TTaskParserInputData[],
            true | { message: string; name: string }
        >
    >;

    create(
        task: TTaskParserInputData
    ): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    >;
    remove(
        id: string
    ): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    >;
    edit({
        id,
        body,
    }: {
        id: string;
        body: TTaskParserInputData;
    }): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    >;
}
