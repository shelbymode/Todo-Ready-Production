/* import { TUserOptionsLogin } from "~~/backend/Auth/application/ports";
import { AuthService } from "~~/backend/common/dependencies/dependenciesLocator";
import {
    SuccessResponse,
    FailResponse,
} from "~~/client/core/common/types/response.types";

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
        const potentialUserToken = await AuthService.login({
            email: body.email,
            password: body.password,
        });

        if (potentialUserToken.isOk()) {
            AuthService.setLoginCookie(event, potentialUserToken.value);
            return SuccessResponse("Success authorization");
        } else if (potentialUserToken.isErr()) {
            throw FailResponse(potentialUserToken.error);
        }
    } catch (e) {
        console.log("[[Catched by guard]]", e);
        return e;
    }
});
 */
