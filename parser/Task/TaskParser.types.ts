import { z } from "zod";
import { TTaskData } from "~~/entity/Task/TaskEntity.types";

export const taskOutputDataSchema = z
    .object({
        id: z.string(),
        userId: z.string(),
        body: z.string(),
        done: z.boolean(),
        createdAt: z.string().transform((val) => new Date(val)),
    })
    .strict();

export type TTaskOutputDataSchema = typeof taskOutputDataSchema;
export type TTaskParserInputData = TTaskData;
export type TTaskParserOutputData = z.infer<TTaskOutputDataSchema>;
