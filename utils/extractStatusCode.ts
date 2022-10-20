export const extractStatusCode = (message: string) => {
    const potentialCode = Number.parseInt(message);
    if (isNaN(potentialCode)) return 500;
    return potentialCode;
};
