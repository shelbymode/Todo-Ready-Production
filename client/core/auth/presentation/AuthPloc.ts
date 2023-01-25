import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/services/auth.service.types";
import { COOKIE_AUTH_NAME } from "~~/shared/constants";
import { useNotificationStore } from "~~/stores/notificationStore";
import { Analyser } from "../../common/application/core.analyzer";
import { Ploc } from "../../common/presentation/Ploc";
import { LoginUseCase } from "../application/usecases/Login.usecase";
import { LogoutUseCase } from "../application/usecases/Logout.usecase";
import { SignupUseCase } from "../application/usecases/Signup.usecase";
import { AuthState, authInitialState } from "./AuthState";

export class AuthPloc extends Ploc<AuthState> {
    notificationStore: ReturnType<typeof useNotificationStore>;
    constructor(
        private loginUseCase: LoginUseCase,
        private signupUseCase: SignupUseCase,
        private logoutUseCase: LogoutUseCase
    ) {
        super(authInitialState);

        this.notificationStore = useNotificationStore();
        this.loadAuth();
    }
    loadAuth() {
        const authToken = useCookie(COOKIE_AUTH_NAME);
        if (!authToken || !authToken.value) {
            return this.changeState({ isAuthorized: false });
        }
        this.changeState({ isAuthorized: true });
    }
    login(userOptions: TUserOptionsLogin) {
        const state = this.state;
        const changeState = this.changeState.bind(this);
        const notificationStore = this.notificationStore;

        new Analyser(() => this.loginUseCase.execute(userOptions)).check({
            respondWithSuccess(data) {
                notificationStore.displayNotification(data.message);
                changeState({ ...state, isAuthorized: true });
            },
            respondWithClientError(clientError) {
                notificationStore.displayNotification(clientError.message);
            },
            respondWithServerError(serverError) {
                notificationStore.displayNotification(serverError.message);
            },
        });
    }
    signup(userOptions: TUserOptionsSignup) {
        const notificationStore = this.notificationStore;

        new Analyser(() => this.signupUseCase.execute(userOptions)).check({
            respondWithSuccess(data) {
                notificationStore.displayNotification(data.message);
            },
            respondWithClientError(clientError) {
                notificationStore.displayNotification(clientError.message);
            },
            respondWithServerError(serverError) {
                notificationStore.displayNotification(serverError.message);
            },
        });
    }
    logout() {
        const state = this.state;
        const changeState = this.changeState.bind(this);
        const notificationStore = this.notificationStore;

        new Analyser(() => this.logoutUseCase.execute()).check({
            respondWithSuccess(data) {
                notificationStore.displayNotification(data.message);
                changeState({ ...state, isAuthorized: false });
            },
            respondWithClientError(clientError) {
                notificationStore.displayNotification(clientError.message);
            },
            respondWithServerError(serverError) {
                notificationStore.displayNotification(serverError.message);
            },
        });
    }
}
