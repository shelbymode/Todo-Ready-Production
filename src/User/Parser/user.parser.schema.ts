import { z } from "zod";
import { TEnumGender, TEnumRole } from "~~/app/modules/user/domain/user.dto.schema";
import { toCapitalize } from "~~/app/shared/utils/toCapitalize";

export const userDBDataSchema = z
    .object({
        id: z.string(),
        name: z.string().transform((val) => toCapitalize(val)),
        email: z.string().email(),
        gender: z.nativeEnum(TEnumGender),
        role: z.nativeEnum(TEnumRole),
        todos: z.string().optional().array().optional(),
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
        updatedAt: z.string().transform((val, ctx) => {
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

export type TUserDBDataSchema = typeof userDBDataSchema;
export type TUserOutputData = z.infer<TUserDBDataSchema>;
