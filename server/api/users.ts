export default defineEventHandler(() => {
    const a = 2;

    if (a === 3)
        return new Error("Fetching error", {
            cause: 500,
        });
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
