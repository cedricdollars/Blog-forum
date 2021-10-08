import {InMemoryUserRepository } from '../../src/Infrastructure/in-memory/index';
import {CreateUser} from '../../src/domain/user/usecases/'
import { UserRepository } from '../../src/domain/user/repositories/UserRepository';
import { nameOf, emailOf, passwordOf } from '../../src/domain/user/value_objects/';
import { UserDTO } from '../../src/domain/user/dto/userDTO';
import { CreateUSerDTO } from '../../src/domain/user/dto/createUserDTO';


describe("Users tests suite",  () => {

    const createFakeUserFactory = (username:string, useremail:string, password:string): UserDTO => {
        return {
            id: Math.random().toString(32),
            username :  nameOf(username),
            useremail: emailOf(useremail),
            password: passwordOf(password)
    }
}
    
    it("should able to create a new user", async() => {
        //GIVEN
        const oneUser = createFakeUserFactory("cedric", "cedric.ngoune@redelectric.fr", "redE");
        const userRepository: UserRepository = new InMemoryUserRepository();
        const userSut = new CreateUser(userRepository);

        //WHEN
        const userCreated = await userSut.create(oneUser);

        //THEN
        expect(userCreated).toHaveProperty("id");
        expect(userCreated.id).toEqual(expect.any(String));
    })
    

})


