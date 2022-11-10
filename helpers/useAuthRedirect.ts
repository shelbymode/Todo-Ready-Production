export const useAuthRedirect = async (event) => {
    if (!event.context.user) {
        return { error: "Yoy don't have such permission", code: 302 };
    }
};
