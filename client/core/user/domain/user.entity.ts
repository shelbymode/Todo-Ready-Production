import { CoreEntity } from "../../common/domain/core.entity";
import { Role } from "@prisma/client";
import {
    TUserDTO,
    TUserDTOSchema,
    userDTOSchema,
} from "~~/shared/types/dto.types";

export type UserName = string;
export type UniqueId = string;
export type Email = string;
export type EmailDomain = string;

export type TUser = {
    id: UniqueId;
    name: UserName;
    email: Email;
    role: Role;
    createdAt: Date;
    mailDomain: EmailDomain;
};

class UserEntity extends CoreEntity<TUserDTOSchema> {
    user: TUser | null = null;
    constructor(userDTO: TUserDTO) {
        super(userDTOSchema);
        this.validateAndConvert(userDTO);
    }
    validateAndConvert(userDTO: TUserDTO) {
        const validatedUserDTO = this.validateDTO(userDTO);

        if (validatedUserDTO.error) {
            console.log("Failure validation userEntity!!");
            throw validatedUserDTO.error;
        }
        if (validatedUserDTO.data) {
            console.log("Success full validation userEntity!");
            this.user = this.toDomain(validatedUserDTO.data);
        }
    }

    toDomain(user: TUserDTO): TUser {
        const { id, name, email, role, createdAt } = user;
        return {
            id,
            name,
            email,
            role,
            createdAt,
            mailDomain: this.extractDomain(email),
        };
    }
    extractDomain(email: string) {
        return email.split("@").at(-1)?.split(".").at(0) as string;
    }
    isBelongsToEmailDomain(mailDomain: string): boolean {
        return this.user?.mailDomain === mailDomain;
    }
    get() {
        return this.user;
    }
}

export { UserEntity };
