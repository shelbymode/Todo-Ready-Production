import { AuthService } from "~~/src/Auth/infrastructure/Service/auth.service";
import { TUserOptionsSignup } from "~~/src/Auth/infrastructure/Service/auth.service.types";

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as TUserOptionsSignup;

    //* TODO: Add schemas validation

    if (!body.email || !body.name || !body.password || !body.confirmPassword) return { error: "Incorrect input data type", data: null };

    try {
        const data = await AuthService.signup({
            email: body.email,
            name: body.name,
            password: body.password,
            confirmPassword: body.confirmPassword,
        });
        return { data: data.data, error: data.error };
    } catch (e) {
        console.log(e);
        return { data: null, error: e.message };
    }
});
