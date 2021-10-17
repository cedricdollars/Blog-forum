import {InMemoryUserRepository } from '../../src/modules/Users/Infrastructure/repositories/in-memory';
import {UserPassword, UserEmail, UserName} from '../../src/modules/Users/domain/value-objects/';
import { UserDTO } from '../../src/modules/Users/domain/dto/userDTO';
import {CreateUser} from "../../src/modules/Users/application/usescases/impl";



interface CreateUserDTO {
    username: string;
    useremail: string;
    password: string;
}

describe("Users creation scenario",  () => {
    let userRepository: InMemoryUserRepository
    const createFakeUserFactory = <CreateUSerDTO>({username, useremail, password}: CreateUserDTO): UserDTO => ({
        id: Math.random().toString(32),
        username: new UserName(username),
        useremail: new UserEmail(useremail),
        password: new UserPassword(password)
    });
    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
    })


    it("should create a new user", async () => {
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
    xit("should get one user", async () => {
        const oneUser = createFakeUserFactory({
            username: "cédric",
            useremail: "cedric.ngoune@redelectric.fr",
            password: "dollars"
        })
        const usecaseUser = new CreateUser(userRepository)
        const userCreated = await usecaseUser.create(oneUser)

    })

})




