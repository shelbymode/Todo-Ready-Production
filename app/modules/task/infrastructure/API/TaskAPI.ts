import { TAPIResponse } from "~~/app/shared/types";
import { BASE_URL } from "~~/app/shared/utils/constants";
import { TTaskParserInputData } from "../../domain/validation/taskDataSchema.types";
import { ITaskAPI } from "./TaskAPI.types";

export class TaskAPI implements ITaskAPI {
    async getOne(id: string): TAPIResponse<TTaskParserInputData> {
        return useFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    async getMany(): TAPIResponse<TTaskParserInputData[]> {
        return useFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
        }) as Awaited<TAPIResponse<TTaskParserInputData[]>>;
    }
    async create(
        task: TTaskParserInputData
    ): TAPIResponse<TTaskParserInputData> {
        return useFetch(`/tasks?createTask=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: task,
        });
    }
    async remove(id: string): TAPIResponse<TTaskParserInputData> {
        return useFetch(`/tasks/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
        });
    }
    async edit({
        id,
        body,
    }: {
        id: string;
        body: TTaskParserInputData;
    }): TAPIResponse<TTaskParserInputData> {
        return useFetch(`/tasks/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: body,
        });
    }
}
