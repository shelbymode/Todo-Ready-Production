import { z } from "zod";

export const taskDataSchema = z
    .object({
        id: z.string(),
        userId: z.string(),
        body: z.string(),
        done: z.boolean(),
        createdAt: z.string(),
    })
    .strict();

export type TTaskDataSchema = typeof taskDataSchema;
export type TTaskData = z.infer<TTaskDataSchema>;
