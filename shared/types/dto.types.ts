import { Role } from "@prisma/client";
import { z } from "zod";

export const userDTOSchema = z
    .object({
        id: z.string().uuid(),
        name: z.string(),
        email: z.string().email(),
        role: z.nativeEnum(Role),
        createdAt: z.date(),
        updatedAt: z.date(),
        isOnceUpdated: z.boolean(),
    })
    .strict();

export type TUserDTOSchema = typeof userDTOSchema;
export type TUserDTO = z.infer<TUserDTOSchema>;
