export default defineNuxtRouteMiddleware(async (to) => {
    console.log("2. Route middleware");

    const authToken = useCookie("todo-production-user");

    if (!authToken || !authToken.value) {
        console.log("Token has corrupted");
        return navigateTo("/auth");
    } else {
        console.log("Correct token exists");
    }
});
