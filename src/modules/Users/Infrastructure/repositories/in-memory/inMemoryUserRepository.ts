import { UserRepository } from "modules/Users/domain/repositories/UserRepository";
import crypto from 'crypto';
import { User } from "modules/Users/domain/entity/User";
import * as fs from 'fs';
import { UserDTO } from "modules/Users/domain/dto/userDTO";
import { CreateUSerDTO } from "modules/Users/domain/dto/createUserDTO";

export class InMemoryUserRepository implements UserRepository {
    private fileStorage: string = "user.json";

    async createUser(userdto: CreateUSerDTO): Promise<UserDTO> {
        const text = Math.random().toString();
        const key = 'cedric';
        const id = crypto.createHmac('sha1', key).update(text).digest('hex')
        const userToCreate : UserDTO = {
            id,
            ...userdto
        }
        let data = JSON.stringify(userToCreate,null, 2);

        try {
            fs.writeFileSync(this.fileStorage, data, {encoding: "utf-8"})
        } catch (error) {
            console.error(error);
            throw new Error("Error while writing..."); 
        }
       return userToCreate
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
