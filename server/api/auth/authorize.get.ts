import { useAuthRedirect } from "~~/helpers/useAuthRedirect";

export default defineEventHandler(async (event) => {
    await useAuthRedirect(event);
    return event.context.user;
});
