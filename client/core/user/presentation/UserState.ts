import { TUser } from "../domain/user.entity";

export interface UserState {
    currentUser: TUser | null;
}

export const userInitialState: UserState = {
    currentUser: null,
};
