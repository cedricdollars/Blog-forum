import {InMemoryUserRepository } from '../../src/Infrastructure/in-memory';
import {CreateUser} from '../../src/domain/user/usecases/'
import {UserPassword, UserEmail, UserName} from '../../src/domain/user/value_objects/';
import { UserDTO } from '../../src/domain/user/dto/userDTO';



interface CreateUserDTO {
    username: string;
    useremail: string;
    password: string;
}

describe("Users creation scenario",  () => {
    let userRepository: InMemoryUserRepository
    const createFakeUserFactory = <CreateUSerDTO>({username, useremail, password}: CreateUserDTO): UserDTO => ({
        id: Math.random().toString(32),
        username: UserName.userNameOf(username),
        useremail: UserEmail.emailOf(useremail),
        password: UserPassword.passwordOf(password)
    });
    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
    })


    it("should able to create a new user", async () => {
        //GIVEN
        const oneUser = createFakeUserFactory(
            {
                    username : "cedric",
                    useremail : "cedric.ngoune@redelectric.fr",
                    password : "redE"});

        const userSut = new CreateUser(userRepository);
        //WHEN
        const userCreated = await userSut.create(oneUser);

        //THEN
        expect(userCreated).toHaveProperty("id");
        expect(userCreated.id).toEqual(expect.any(String));
    })

})




