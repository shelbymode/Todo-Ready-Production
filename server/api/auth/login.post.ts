import { TUserOptionsLogin } from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import { AuthServerService } from "~~/backend/Auth/infrastructure/Service/auth.service";
import {
    FailResponse,
    SuccessResponse,
} from "~~/client/shared/types/response.types";

const loginValidate = (body: TUserOptionsLogin) => {
    if (!body.email || !body.password) {
        throw createError({
            statusCode: 400,
            message: "Incorrect input data typeY",
        });
    }
};

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as TUserOptionsLogin;

    loginValidate(body);

    try {
        const potentialUserToken = await AuthServerService.login({
            email: body.email,
            password: body.password,
        });

        if (potentialUserToken.isOk()) {
            AuthServerService.setLoginCookie(event, potentialUserToken.value);
            return SuccessResponse("Success authorization");
        } else if (potentialUserToken.isErr()) {
            throw FailResponse(potentialUserToken.error);
        }
    } catch (e) {
        console.log("[[Catched by guard]]", e);
        return e;
    }
});
