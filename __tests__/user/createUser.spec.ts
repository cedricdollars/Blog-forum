import {InMemoryUserRepository } from '../../src/Infrastructure/in-memory/index';
import {CreateUser} from '../../src/domain/user/usecases/'
import { UserRepository } from '../../src/domain/user/repositories/UserRepository';
import { nameOf, emailOf, passwordOf } from '../../src/domain/user/value_objects/';
import { UserDTO } from '../../src/domain/user/dto/userDTO';
import { CreateUSerDTO } from '../../src/domain/user/dto/createUserDTO';


describe("Users tests suite",  () => {
    
    it("Expect it create a new user", async() => {

        //GIVEN
        const user:CreateUSerDTO = { 
            username: nameOf('cédric'),
            useremail: emailOf("gabyngoune@yahoo.fr"),
            password: passwordOf('toto')
        }
        const userRepository: UserRepository = new InMemoryUserRepository();
        const userSut = new CreateUser(userRepository);
        //WHEN
        const userCreated = await userSut.create(user);
        //THEN
        expect(userCreated).toHaveProperty("id");
        expect(userCreated.id).toEqual(expect.any(String));

    })

})


