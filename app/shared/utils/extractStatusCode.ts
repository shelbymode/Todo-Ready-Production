export const extractStatusCode = (message: unknown) => {
    if (typeof message === "string") {
        const potentialCode = Number.parseInt(message);
        if (isNaN(potentialCode)) return 500;
        return potentialCode;
    }
    return 500;
};
