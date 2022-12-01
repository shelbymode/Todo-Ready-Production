import { Auth } from "~~/client/shared/constants";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/src/Auth/infrastructure/Service/auth.service.types";
import { useAuthStore } from "~~/stores/authStore";

export const useDataAuth = ({
    formLogin,
    formSignup,
}: {
    formLogin: TUserOptionsLogin;
    formSignup: TUserOptionsSignup;
}) => {
    const storeAuth = useAuthStore();

    function loginHandler(e: Event) {
        console.log("login...");
        storeAuth.login(formLogin);
    }

    function signupHandler(e: Event) {
        console.log("signup...");
        storeAuth.signup(formSignup);
    }

    const mapInputInfo = {
        [Auth.LOGIN]: [
            {
                id: "email",
                label: "Email",
            },
            {
                id: "password",
                label: "Password",
                type: "password" as const,
            },
        ],
        [Auth.SIGNUP]: [
            {
                id: "email",
                label: "Email",
            },
            {
                id: "name",
                label: "Name",
            },
            {
                id: "password",
                label: "Password",
                type: "password" as const,
            },
            {
                id: "confirmPassword",
                label: "Confirm Password",
                type: "password" as const,
            },
        ],
    };

    const mapAuthForm = {
        [Auth.LOGIN]: formLogin,
        [Auth.SIGNUP]: formSignup,
    };
    const mapAuthButtons = {
        [Auth.LOGIN]: { name: "Log in", handler: loginHandler },
        [Auth.SIGNUP]: { name: "Sign up", handler: signupHandler },
    };
    const mapAuthTabs = {
        [Auth.LOGIN]: "LOG IN",
        [Auth.SIGNUP]: "SIGN UP",
    };

    return { mapInputInfo, mapAuthForm, mapAuthButtons, mapAuthTabs };
};
