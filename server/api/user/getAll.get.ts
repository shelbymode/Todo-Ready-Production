/* import { AuthServerService } from "~~/backend/Auth/services/auth.service";
import { TUserOptionsLogin } from "~~/backend/Auth/services/auth.service.types";
import {
    SuccessResponse,
    FailResponse,
} from "~~/client/core/common/types/response.types";

export default defineEventHandler(async (event) => {
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
 */
