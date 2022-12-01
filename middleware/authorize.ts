import { COOKIE_AUTH_NAME } from "~~/client/shared/constants";

export default defineNuxtRouteMiddleware(async (to) => {
    console.log("2. Route middleware");

    const authToken = useCookie(COOKIE_AUTH_NAME);

    if (!authToken || !authToken.value) {
        console.log("Token has corrupted");
        return navigateTo("/auth");
    } else {
        console.log("Correct token exists");
    }
});
