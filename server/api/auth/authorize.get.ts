export default defineEventHandler(async (event) => {
    if (!event.context.user) {
        return { error: "You don't have such permission", code: 302 };
    }
    return event.context.user;
});
