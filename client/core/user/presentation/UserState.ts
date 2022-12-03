import { TUser } from "../domain/user.entity";

export interface UserState {
    currentUser: TUser;
}

export const userInitialState: UserState = {
    currentUser: null,
};
