import useValidate from "@vuelidate/core";

export const useValidationHelpers = (v$: ReturnType<typeof useValidate>) => {
    const touch = (field: string) => v$.value[field]?.$touch();
    const getIsError = (field: string) =>
        v$.value[field]?.$silentErrors[0]?.$message;
    const getIsDirty = (field: string) => v$.value[field]?.$dirty;
    const getMessage = (field: string) =>
        v$.value[field]?.$silentErrors[0]?.$message;
    const isDirtyAndError = (field: string) =>
        getIsError(field) && getIsDirty(field);
    const isDirtyAndNotError = (field: string) =>
        !getIsError(field) && getIsDirty(field);
    const isNotDirtyAndError = (field: string) =>
        getIsError(field) && !getIsDirty(field);
    const getStatusValidation = (field: string) =>
        computed(() => {
            if (!getIsDirty(field)) return "inactive";
            else if (isNotDirtyAndError(field)) return "initial-error";
            else if (isDirtyAndError(field)) return "dirty-error";
            else if (isDirtyAndNotError) return "correct";
        });

    return {
        touch,
        getIsError,
        getIsDirty,
        getMessage,
        isDirtyAndError,
        getStatusValidation,
    };
};
