import { AsyncData } from "#app";
import { ICRUDRepository } from "~~/app/shared/types";
import { TTaskParserInputData } from "../../domain/validation/taskDataSchema.types";

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
