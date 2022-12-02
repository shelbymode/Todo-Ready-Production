import { COOKIE_AUTH_NAME } from "~~/client/shared/constants";
import { Ploc } from "../../common/presentation/Ploc";
import { SignupUseCase } from "../domain/usecases/Signup.usecase";
import { LoginUseCase } from "../domain/usecases/Login.usecase";
import { LogoutUseCase } from "../domain/usecases/Logout.usecase";
import {
    TUserOptionsLogin,
    TUserOptionsSignup,
} from "~~/backend/Auth/infrastructure/Service/auth.service.types";
import { Analyser } from "~~/client/modules/core/application/core.analyzer";
import { logError } from "~~/client/shared/utils/logError";
import { AuthState, authInitialState } from "./AuthState";
import { useNotificationStore } from "~~/stores/notificationStore";

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
