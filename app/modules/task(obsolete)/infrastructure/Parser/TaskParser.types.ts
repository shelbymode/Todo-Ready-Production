import { z } from "zod";

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
export type TTaskParserOutputData = z.infer<TTaskOutputDataSchema>;
