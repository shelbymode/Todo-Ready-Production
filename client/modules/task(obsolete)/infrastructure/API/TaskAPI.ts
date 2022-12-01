import { TAPIResponse } from "~~/client/shared/types";
import { BASE_URL } from "~~/client/shared/utils/constants";
import { TTaskParserInputData } from "../../domain/validation/taskDataSchema.types";
import { ITaskAPI } from "./TaskAPI.types";

export class TaskAPI implements ITaskAPI {
    async getOne(id: string): TAPIResponse<TTaskParserInputData> {
        return useLazyFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
        });
    }
    async getMany(): TAPIResponse<TTaskParserInputData[]> {
        return useLazyFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
            server: false,
        }) as Awaited<TAPIResponse<TTaskParserInputData[]>>;
    }
    async create(
        task: TTaskParserInputData
    ): TAPIResponse<TTaskParserInputData> {
        return useLazyFetch(`/tasks?createTask=true`, {
            method: "POST",
            baseURL: BASE_URL,
            server: false,
            body: task,
        });
    }
    async remove(id: string): TAPIResponse<TTaskParserInputData> {
        return useLazyFetch(`/tasks/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
            server: false,
        });
    }
    async edit({
        id,
        body,
    }: {
        id: string;
        body: TTaskParserInputData;
    }): TAPIResponse<TTaskParserInputData> {
        return useLazyFetch(`/tasks/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            server: false,
            body: body,
        });
    }
}
