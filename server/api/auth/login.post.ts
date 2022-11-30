import {
    FailResponse,
    SuccessResponse,
} from "./../../../app/shared/types/index";
import { TUserOptionsLogin } from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { AuthService } from "~~/src/Auth/infrastructure/Service/auth.service";
import { CustomError } from "~~/app/shared/Error/CustomError";

const loginValidate = (body: TUserOptionsLogin) => {
    if (!body.email || !body.password) {
        return new CustomError({
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
