import { AuthDatabaseRepository } from "./../../auth/data/AuthDatabaseRepository";
import { AuthPloc } from "../../auth/presentation/AuthPloc";
import { LoginUseCase } from "../../auth/domain/usecases/Login.usecase";
import { LogoutUseCase } from "../../auth/domain/usecases/Logout.usecase";
import { SignupUseCase } from "../../auth/domain/usecases/Signup.usecase";

function provideAuthPloc(): AuthPloc {
    const authDatabaseRepository = new AuthDatabaseRepository();

    const loginUseCase = new LoginUseCase(authDatabaseRepository);
    const signupUseCase = new SignupUseCase(authDatabaseRepository);
    const logoutUseCase = new LogoutUseCase(authDatabaseRepository);

    const authPloc = new AuthPloc(loginUseCase, signupUseCase, logoutUseCase);

    return authPloc;
}

export const dependenciesLocator = {
    provideAuthPloc,
};
