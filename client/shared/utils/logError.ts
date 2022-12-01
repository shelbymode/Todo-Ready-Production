/* eslint-disable @typescript-eslint/no-explicit-any */
export const logError = (e: any, nameError?: string) => {
    let messageError: {
        statusCode?: number;
        message?: string;
        name?: string;
        nameError?: string;
    } = {};

    if (nameError) {
        messageError.nameError = nameError;
    }

    if (e?.statusCode) {
        messageError.statusCode = e.statusCode;
    }
    if (e?.message) {
        messageError.message = e.message;
    }
    if (e?.name) {
        messageError.name = e.name;
    }

    if (Object.keys(messageError).length === 0) messageError = e;

    console.table(messageError);
};
