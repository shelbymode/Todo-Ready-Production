import { z } from "zod";
import { TEnumGender, TEnumRole } from "./userDataSchema.types";

export const userDataSchema = z
    .object({
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
        gender: z.nativeEnum(TEnumGender),
        role: z.nativeEnum(TEnumRole),
        tasks: z.string().optional().array().optional(),
        createdAt: z.string(),
    })
    .strict();
