import { AuthServerService } from "~~/backend/Auth/infrastructure/Service/auth.service";
import { COOKIE_AUTH_NAME } from "~~/client/shared/constants";

export default defineEventHandler(async (event) => {
    const potentialUserToken = getCookie(event, COOKIE_AUTH_NAME);
    const payloadToken =
        AuthServerService.getUserFromVerificationToken(potentialUserToken);

    if (payloadToken.isErr()) {
        event.context.user = null;
        setCookie(event, COOKIE_AUTH_NAME, null, {
            sameSite: "lax",
        });
    } else if (payloadToken.isOk()) {
        event.context.user = payloadToken.value;
    }
});
