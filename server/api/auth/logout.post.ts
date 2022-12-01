import { AuthServerService } from "~~/backend/Auth/infrastructure/Service/auth.service";
import { SuccessResponse } from "~~/client/shared/types/response.types";

export default defineEventHandler(async (event) => {
    try {
        AuthServerService.clearLoginCookie(event);

        return SuccessResponse("Success logout");
    } catch (e) {
        console.log("[[Catched by guard]]", e);
        return e;
    }
});
