import { CreateUSerDTO } from "modules/Users/domain/dto/createUserDTO";
import { UserDTO } from "modules/Users/domain/dto/userDTO";
import { User } from "modules/Users/domain/entity/User";
import { UserRepository } from "modules/Users/domain/repositories";
import { MysqlError, OkPacket } from "mysql";
import { dbconnection } from "./index";

export class UserRepositoryMysql implements UserRepository {

    async createUser(userdata: CreateUSerDTO): Promise<UserDTO> {
        throw new Error("Method not implemented")
    }
    findUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findAllUser(): Promise<UserDTO[]> {
        throw new Error("Method not implemented.");
    }
    updateUserById(id: string, userdto: UserDTO): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    updateUserByEmail(email: string, userdto: UserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
}