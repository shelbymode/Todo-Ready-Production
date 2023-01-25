import { AuthService } from "~~/backend/common/dependencies/dependenciesLocator";
import { COOKIE_AUTH_NAME } from "~~/shared/constants";

export default defineEventHandler(async (event) => {
    const potentialUserToken = getCookie(event, COOKIE_AUTH_NAME);
    const payloadToken = AuthService.getUserFromVerificationToken(
        potentialUserToken as string
    );

    if (payloadToken.isErr()) {
        event.context.user = null;
        setCookie(event, COOKIE_AUTH_NAME, "", {
            sameSite: "lax",
        });
    } else if (payloadToken.isOk()) {
        event.context.user = payloadToken.value;
    }
});
