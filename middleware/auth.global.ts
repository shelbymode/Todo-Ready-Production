import { COOKIE_AUTH_NAME } from "~~/shared/constants";

const ALLOWED_ROUTES = [/^\/auth\/?$/];

export default defineNuxtRouteMiddleware(async (to) => {
    if (ALLOWED_ROUTES.some((route) => route.test(to.fullPath))) {
        return;
    }

    const authToken = useCookie(COOKIE_AUTH_NAME);

    if (!authToken || !authToken.value) {
        console.log("Token is corrupted");
        return navigateTo("/auth");
    }
});
