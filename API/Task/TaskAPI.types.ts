import { AsyncData } from "#app";
import { TTaskParserOutputData } from "~~/parser/Task/TaskParser.types";

export interface ITaskAPI {
    getOneTask(
        id: string
    ): AsyncData<unknown, true | { message: string; name: string }>;
    getAllTasks(): AsyncData<unknown, true | { message: string; name: string }>;
    createTask(
        task: TTaskParserOutputData
    ): AsyncData<unknown, true | { message: string; name: string }>;
    removeTask(
        id: string
    ): AsyncData<unknown, true | { message: string; name: string }>;
    editTask({
        id,
        task,
    }: {
        id: string;
        task: TTaskParserOutputData;
    }): AsyncData<unknown, true | { message: string; name: string }>;
}
