import { ICRUDFetchRepository, TAPIResponse } from "~~/app/shared/types";
import { TTaskParserInputData } from "../../domain/validation/taskDataSchema.types";

export interface ITaskAPI extends ICRUDFetchRepository<TTaskParserInputData> {
    getOne(id: string): TAPIResponse<TTaskParserInputData>;
    getMany(): TAPIResponse<TTaskParserInputData[]>;

    create(task: TTaskParserInputData): TAPIResponse<TTaskParserInputData>;
    remove(id: string): TAPIResponse<TTaskParserInputData>;
    edit({
        id,
        body,
    }: {
        id: string;
        body: TTaskParserInputData;
    }): TAPIResponse<TTaskParserInputData>;
}
