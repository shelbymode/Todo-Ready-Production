import { AuthServerService } from "~~/backend/Auth/infrastructure/Service/auth.service";
import { COOKIE_AUTH_NAME } from "~~/client/shared/constants";

export default defineEventHandler(async (event) => {
    console.log("1. Server middleware");

    const potentialUserToken = getCookie(event, COOKIE_AUTH_NAME);
    const payloadToken =
        AuthServerService.getUserFromVerificationToken(potentialUserToken);

    if (payloadToken.isErr()) {
        event.context.user = null;
        setCookie(event, COOKIE_AUTH_NAME, null, {
            sameSite: "lax",
        });
    } else if (payloadToken.isOk()) {
        console.log("Payload Token:", payloadToken.value);
        event.context.user = payloadToken.value;
    }
});
