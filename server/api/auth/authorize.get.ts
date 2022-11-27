import { useAuthRedirect } from "~~/helpers/useAuthRedirect";

export default defineEventHandler(async (event) => {
    console.log("3. Auth get");
    await useAuthRedirect(event);
    return event.context.user;
});
