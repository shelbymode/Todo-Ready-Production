import { useAuthRedirect } from "~~/helpers/useAuthRedirect";
import { HttpError } from "~~/app/shared/Error/http.error";

export default defineEventHandler(async (event) => {
    const a = 2;

    console.log("11111");

    await useAuthRedirect(event);

    console.log("22222");

    if (a === 3) return new HttpError({ statusCode: 402, message: "Some error" });
    return {
        id: "111",
        name: "andrew",
        email: "nice.ananenko@gmail.com",
        gender: "MALE",
        role: "STANDARD",
        tasks: [],
        createdAt: "2022-10-19T12:26:50.812Z",
    };
});

/*   {
        id: "222",
        name: "Lexa",
        email: "intern.shavel@gmail.com",
        gender: "FEMALE",
        role: "ADMIN",
        createdAt: "2022-10-19T12:26:50.812",
    }, */
