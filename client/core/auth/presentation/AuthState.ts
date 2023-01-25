export interface AuthState {
    isAuthorized: boolean;
}

export const authInitialState: AuthState = {
    isAuthorized: false,
};
