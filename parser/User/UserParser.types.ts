import { z } from "zod";
import { TEnumGender, TEnumRole } from "~~/entity/User/UserEntity.types";
import { TUserData } from "~~/entity/User/UserEntity.types";
import { toCapitalize } from "~~/utils/toCapitalize";

export const userOutputDataSchema = z
    .object({
        id: z.string(),
        name: z.string().transform((val) => toCapitalize(val)),
        email: z.string().email(),
        gender: z.nativeEnum(TEnumGender),
        role: z.nativeEnum(TEnumRole),
        tasks: z.string().optional().array().optional(),
        createdAt: z.string().transform((val, ctx) => {
            const parsedDate = new Date(val);
            if (isNaN(parsedDate.getDate())) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Date has invalid format",
                });
                return z.NEVER;
            }
            return parsedDate;
        }),
    })
    .strict();

export type TUserOutputDataSchema = typeof userOutputDataSchema;
export type TUserParserInputData = TUserData;
export type TUserParserOutputData = z.infer<TUserOutputDataSchema>;
