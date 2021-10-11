import { CreateUSerDTO } from "domain/user/dto/createUserDTO";
import { UserDTO } from "domain/user/dto/userDTO";
import { User } from "domain/user/entity/User";
import { UserRepository } from "domain/user/repositories";
import { MysqlError, OkPacket } from "mysql";
import { dbconnection } from ".";

export class UserRepositoryMysql implements UserRepository {

    async createUser(userdata: CreateUSerDTO): Promise<UserDTO> {
        return undefined;
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