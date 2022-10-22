import { AsyncData } from "#app";
import { TTaskParserInputData } from "~~/entity/Task/TaskEntity.types";
import { BASE_URL } from "~~/utils/constants";
import { ITaskAPI } from "./TaskAPI.types";

export class TaskAPI implements ITaskAPI {
    async getOne(
        id: string
    ): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    async getMany(): Promise<
        AsyncData<
            TTaskParserInputData[],
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
        }) as AsyncData<
            TTaskParserInputData[],
            true | { message: string; name: string }
        >;
    }
    async create(
        task: TTaskParserInputData
    ): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/tasks?createTask=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: task,
        });
    }
    async remove(
        id: string
    ): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    > {
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
    }): Promise<
        AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >
    > {
        return useFetch(`/tasks/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: body,
        }) as AsyncData<
            TTaskParserInputData,
            true | { message: string; name: string }
        >;
    }
}
