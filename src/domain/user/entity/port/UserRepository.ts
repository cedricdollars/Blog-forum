import { User } from "../User";

export interface UserRepository {

    createUser(user: User): Promise<void>;

    findUserByEmail(email: string): Promise<User>;

    findAllUser(): Promise<User[]>;

    updateUserById(id: string, user: User): Promise<User>;

    updateUserByEmail(email: string, user: User): Promise<User>;
}