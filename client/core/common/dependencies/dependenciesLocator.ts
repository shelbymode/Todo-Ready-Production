import { LoginUseCase } from "../../auth/application/usecases/Login.usecase";
import { LogoutUseCase } from "../../auth/application/usecases/Logout.usecase";
import { SignupUseCase } from "../../auth/application/usecases/Signup.usecase";
import { AuthPloc } from "../../auth/presentation/AuthPloc";
import { AuthAdapter } from "../../auth/services/auth.adapter";
import { CreateUserUseCase } from "../../user/application/usecases/CreateUser.usecase";
import { EditUserByIdUseCase } from "../../user/application/usecases/EditUserById.usecase";
import { GetAllUsersUseCase } from "../../user/application/usecases/GetAllUsers.usecase";
import { GetUserByIdUseCase } from "../../user/application/usecases/GetUserById.usecase";
import { RemoveUserByIdUseCase } from "../../user/application/usecases/RemoveUserById.usecase";
import { UserPloc } from "../../user/presentation/UserPloc";
import { UserRepositoryAdapter } from "../../user/services/user.adapter";

function provideAuthPloc(): AuthPloc {
    const authenticationService = new AuthAdapter();

    const loginUseCase = new LoginUseCase(authenticationService);
    const signupUseCase = new SignupUseCase(authenticationService);
    const logoutUseCase = new LogoutUseCase(authenticationService);

    const authPloc = new AuthPloc(loginUseCase, signupUseCase, logoutUseCase);

    return authPloc;
}
function provideUserPloc(): UserPloc {
    const userRepositoryService = new UserRepositoryAdapter();

    const createUserUseCase = new CreateUserUseCase(userRepositoryService);
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepositoryService);
    const getAllUsersUseCase = new GetAllUsersUseCase(userRepositoryService);
    const getUsersByFilterUseCase = new GetUserByIdUseCase(
        userRepositoryService
    );
    const editUserByIdUseCase = new EditUserByIdUseCase(userRepositoryService);
    const removeUserByIdUseCase = new RemoveUserByIdUseCase(
        userRepositoryService
    );
    const userPloc = new UserPloc(
        createUserUseCase,
        getUserByIdUseCase,
        getAllUsersUseCase,
        getUsersByFilterUseCase,
        editUserByIdUseCase,
        removeUserByIdUseCase
    );

    return userPloc;
}

export const dependenciesLocator = {
    provideAuthPloc,
    provideUserPloc,
};
