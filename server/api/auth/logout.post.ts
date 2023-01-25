import { AuthService } from "~~/backend/common/dependencies/dependenciesLocator";
import { SuccessResponse } from "~~/client/core/common/types/response.types";

export default defineEventHandler(async (event) => {
    try {
        AuthService.clearLoginCookie(event);

        return SuccessResponse("Success logout");
    } catch (e) {
        console.log("[[Catched by guard]]", e);
        return e;
    }
});
