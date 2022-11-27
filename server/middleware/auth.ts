import { AuthService } from "~~/src/Auth/infrastructure/Service/auth.service";

export default defineEventHandler(async (event) => {
    console.log("1. Server middleware");

    const potentialUserToken = getCookie(event, "todo-production-user");
    const payloadToken = await AuthService.getUserFromVerificationToken(potentialUserToken);

    if (!payloadToken) {
        event.context.user = null;
        setCookie(event, "todo-production-user", null, {
            sameSite: "lax",
        });
        return;
    }
    console.log("Payload Token:", payloadToken);

    event.context.user = payloadToken;
});
