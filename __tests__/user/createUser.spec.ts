import {InMemoryUserRepository } from '../../src/Infrastructure/in-memory';
import {CreateUser} from '../../src/domain/user/usecases/'
import { UserRepository } from '../../src/domain/user/repositories';
import {nameOf, emailOf, passwordOf, UserName, isEqualTo, isValidName} from '../../src/domain/user/value_objects/';
import { UserDTO } from '../../src/domain/user/dto/userDTO';
import {throws} from "assert";
import {CreateUSerDTO} from "../../src/domain/user/dto/createUserDTO";


interface CreateUserDTO {
    username: string;
    useremail: string;
    password: string;
}

describe("Users creation scenario",  () => {
    let userRepository: InMemoryUserRepository
    const createFakeUserFactory = <CreateUSerDTO>({username, useremail, password}: CreateUserDTO): UserDTO => ({
        id: Math.random().toString(32),
        username: nameOf(username),
        useremail: emailOf(useremail),
        password: passwordOf(password)
    });
    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
    })


    it("should able to create a new user", async () => {
        //GIVEN
        const oneUser = createFakeUserFactory({username : "cedric", useremail : "cedric.ngoune@redelectric.fr", password : "redE"});
        const userSut = new CreateUser(userRepository);

        //WHEN
        const userCreated = await userSut.create(oneUser);

        //THEN
        expect(userCreated).toHaveProperty("id");
        expect(userCreated.id).toEqual(expect.any(String));
    })
    it("should throw an error when invalid name is given", async () => {
        const invalidGivenField = createFakeUserFactory({username : "*-4", useremail : "bertrand_gastambide@gmail.com", password : "bertrand"});
        const userSut = new CreateUser(userRepository);
        const userCreated = await userSut.create(invalidGivenField);
        expect(() =>isValidName("*-4")).toThrow("user name should contain only letter");
    })
    it("should not accept white space in username", async () => {
        const invalidGivenField = createFakeUserFactory({username : " ", useremail : "bertrand_gastambide@gmail.com", password : "bertrand"});
        const userSut = new CreateUser(userRepository);
        const userCreated = await userSut.create(invalidGivenField);
        expect(() =>isValidName("")).toThrow("user name should contain only letter");
    })
})




