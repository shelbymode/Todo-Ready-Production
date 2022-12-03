import { User } from "@prisma/client";
import { useNotificationStore } from "~~/stores/notificationStore";
import { Analyser } from "../../common/application/core.analyzer";
import { Ploc } from "../../common/presentation/Ploc";
import { CreateUserUseCase } from "../application/usecases/CreateUser.usecase";
import { EditUserByIdUseCase } from "../application/usecases/EditUserById.usecase";
import { GetAllUsersUseCase } from "../application/usecases/GetAllUsers.usecase";
import { GetUserByIdUseCase } from "../application/usecases/GetUserById.usecase";
import { RemoveUserByIdUseCase } from "../application/usecases/RemoveUserById.usecase";
import { UserState, userInitialState } from "./UserState";

export class UserPloc extends Ploc<UserState> {
    notificationStore: ReturnType<typeof useNotificationStore>;
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserByIdUseCase: GetUserByIdUseCase,
        private getAllUsersUseCase: GetAllUsersUseCase,
        private getUsersByFilterUseCase: GetUserByIdUseCase,
        private editUserByIdUseCase: EditUserByIdUseCase,
        private removeUserByIdUseCase: RemoveUserByIdUseCase
    ) {
        super(userInitialState);

        this.notificationStore = useNotificationStore();
    }
    createUser(body: User) {
        const notificationStore = this.notificationStore;

        new Analyser(() => this.createUserUseCase.execute(body)).check({
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
    getUserById(id: string) {
        const notificationStore = this.notificationStore;

        new Analyser(() => this.getUserByIdUseCase.execute(id)).check({
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
    getAllUsers() {
        const notificationStore = this.notificationStore;

        new Analyser(() => this.getAllUsersUseCase.execute()).check({
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
    updateCurrentProfile(body: Partial<User>) {
        const notificationStore = this.notificationStore;

        const state = this.state;
        const changeState = this.changeState;
        const currentUserId = state.currentUser.id;

        new Analyser(() =>
            this.editUserByIdUseCase.execute(currentUserId, body)
        ).check({
            respondWithSuccess(data) {
                notificationStore.displayNotification(data.message);
                changeState({ currentUser: data.data.get() });
            },
            respondWithClientError(clientError) {
                notificationStore.displayNotification(clientError.message);
            },
            respondWithServerError(serverError) {
                notificationStore.displayNotification(serverError.message);
            },
        });
    }
    removeCurrentProfile() {
        const notificationStore = this.notificationStore;

        const state = this.state;
        const changeState = this.changeState;
        const currentUserId = state.currentUser.id;

        new Analyser(() =>
            this.removeUserByIdUseCase.execute(currentUserId)
        ).check({
            respondWithSuccess(data) {
                notificationStore.displayNotification(data.message);
                changeState({ currentUser: null });
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
