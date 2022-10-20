import { AsyncData } from "#app";
import { TTaskParserOutputData } from "~~/parser/Task/TaskParser.types";
import { BASE_URL } from "~~/utils/constants";
import { ITaskAPI } from "./TaskAPI.types";

export class TaskAPI implements ITaskAPI {
    getOneTask(
        id: string
    ): AsyncData<unknown, true | { message: string; name: string }> {
        return useFetch(`/tasks/${id}`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    getAllTasks(): AsyncData<
        unknown,
        true | { message: string; name: string }
    > {
        return useFetch(`/tasks`, {
            method: "GET",
            baseURL: BASE_URL,
        });
    }
    createTask(
        task: TTaskParserOutputData
    ): AsyncData<unknown, true | { message: string; name: string }> {
        return useFetch(`/tasks?createTask=true`, {
            method: "POST",
            baseURL: BASE_URL,
            body: task,
        });
    }
    removeTask(
        id: string
    ): AsyncData<unknown, true | { message: string; name: string }> {
        return useFetch(`/tasks/${id}`, {
            method: "DELETE",
            baseURL: BASE_URL,
        });
    }
    editTask({
        id,
        task,
    }: {
        id: string;
        task: TTaskParserOutputData;
    }): AsyncData<unknown, true | { message: string; name: string }> {
        return useFetch(`/tasks/${id}`, {
            method: "PUT",
            baseURL: BASE_URL,
            body: task,
        });
    }
}
