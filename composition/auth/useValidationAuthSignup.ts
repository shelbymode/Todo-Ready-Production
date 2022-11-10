import useValidate from "@vuelidate/core";
import { useValidationHelpers } from "./useValidationHelpers";
import { required, email, minLength, helpers, sameAs } from "@vuelidate/validators";
import { TUserOptionsSignup } from "~~/src/Auth/infrastructure/Service/auth.service.types";

export const useValidationAuthSignup = (formSignup: TUserOptionsSignup) => {
    const rulesSignup = computed(() => {
        return {
            email: {
                required: helpers.withMessage("Where is value, Dog?", required),
                email: helpers.withMessage("It doesn't look as email", email),
            },
            name: {
                required: helpers.withMessage("Where is value, Dog?", required),
                minLength: helpers.withMessage("It doesn't look as name", minLength(2)),
            },
            password: {
                required: helpers.withMessage("Enter password, Dog", required),
                minLength: helpers.withMessage("At least 6 symbols", minLength(6)),
            },
            confirmPassword: {
                required: helpers.withMessage("Enter a confirm password, Dog", required),
                sameAs: helpers.withMessage("Passwords aren't matched", sameAs(formSignup.password)),
            },
        };
    });

    const v$ = useValidate(rulesSignup, formSignup);

    const isFormValid = computed(() => v$.value.$silentErrors.length === 0);

    return { v$, isFormValid, ...useValidationHelpers(v$) };
};
