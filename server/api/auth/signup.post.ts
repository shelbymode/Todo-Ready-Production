import { TUserOptionsSignup } from "~~/backend/Auth/application/ports";
import { AuthService } from "~~/backend/common/dependencies/dependenciesLocator";
import {
    SuccessResponse,
    FailResponse,
} from "~~/client/core/common/types/response.types";

const signupValidate = (body: TUserOptionsSignup) => {
    if (!body.email || !body.name || !body.password || !body.confirmPassword) {
        throw createError({
            statusCode: 400,
            message: "Incorrect input data type",
        });
    }
};

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as TUserOptionsSignup;

    signupValidate(body);

    try {
        const potentialNewUser = await AuthService.signup({ ...body });
        if (potentialNewUser.isOk()) {
            return SuccessResponse("Success registration", {
                ...potentialNewUser.value.toDTO(),
            });
        } else if (potentialNewUser.isErr()) {
            throw FailResponse(potentialNewUser.error);
        }
    } catch (e) {
        console.log("[[Catched by guard]]", e);
        return e;
    }
});
