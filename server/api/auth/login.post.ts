import { TUserOptionsLogin } from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { AuthService } from "~~/src/Auth/infrastructure/Service/auth.service";

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as TUserOptionsLogin;

    if (!body.email || !body.password)
        return { error: "Incorrect input data type", data: null };

    try {
        const userToken = await AuthService.login({
            email: body.email,
            password: body.password,
        });

        console.log("User Token", userToken);

        if (userToken) {
            setCookie(event, "todo-production-user", userToken.token, {
                expires: new Date(
                    Date.now() +
                        userToken.tokenExpiryInDays * 24 * 60 * 60 * 1000
                ),
            });
        }

        return { data: "success", error: null };
    } catch (e) {
        console.log(e);
        return { data: null, error: e.message };
    }
});
