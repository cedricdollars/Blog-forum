import { UserRepository } from "../../../domain/repositories";
import { UserDTO } from "../../../domain/dto/userDTO";
import { CreateUSerDTO } from "../../../domain/dto/createUserDTO";
import {CreateUserUseCase} from "../../../domain/usecases/create-user-use-case";
import {UserPassword} from "../../../domain/value-objects";


export class CreateUser implements CreateUserUseCase{

    constructor(private readonly repository : UserRepository) {}

    async create(userDTO: CreateUSerDTO): Promise<UserDTO> {
        let passwordToHash = await UserPassword.hashPassword(userDTO.password.getValue())
        return  await this.repository.createUser({
            ...userDTO,
            password: passwordToHash as unknown as UserPassword
        });
    }
}
