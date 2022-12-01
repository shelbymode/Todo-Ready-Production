import useValidate from "@vuelidate/core";
import { useValidationHelpers } from "./useValidationHelpers";
import { required, email, minLength, helpers } from "@vuelidate/validators";

export const useValidationAuthLogin = (formLogin: {
    email: string;
    password: string;
}) => {
    const rulesLogin = computed(() => {
        return {
            email: {
                required: helpers.withMessage("Where is value, Dog?", required),
                email: helpers.withMessage("It doesn't look as email", email),
            },
            password: {
                required: helpers.withMessage("Enter password, Dog", required),
                minLength: helpers.withMessage(
                    "At least 6 symbols",
                    minLength(6)
                ),
            },
        };
    });

    const v$ = useValidate(rulesLogin, formLogin);

    const isFormValid = computed(() => v$.value.$silentErrors.length === 0);

    return { v$, isFormValid, ...useValidationHelpers(v$) };
};
