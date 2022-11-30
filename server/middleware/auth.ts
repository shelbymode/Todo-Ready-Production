import { AuthService } from "~~/src/Auth/infrastructure/Service/auth.service";

export default defineEventHandler(async (event) => {
    console.log("1. Server middleware");

    const potentialUserToken = getCookie(event, "todo-production-user");
    const payloadToken =
        AuthService.getUserFromVerificationToken(potentialUserToken);

    if (payloadToken.isErr()) {
        event.context.user = null;
        setCookie(event, "todo-production-user", null, {
            sameSite: "lax",
        });
    } else if (payloadToken.isOk()) {
        console.log("Payload Token:", payloadToken.value);
        event.context.user = payloadToken.value;
    }
});
