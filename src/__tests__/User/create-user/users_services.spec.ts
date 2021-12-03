import {UserServiceImpl} from "../../../modules/Users/application/usesCases";
import {InMemoryUserRepository} from "../../../modules/Users/Infrastructure/repositories/in-memory/inMemoryUserRepository";

import {UserEmail, UserName, UserPassword} from "../../../modules/Users/domain/vo";
import {CreateUSerDTO} from "../../../modules/Users/domain/dto/createUserDTO";
import {createUserService} from "../../../modules/Users/Infrastructure/http/controllers";


class ExistingEmailError extends  Error {
    constructor(existingEmail: string) {
        super();
        this.message = existingEmail
    }
    public getMessage() {
        return this.message
    }
    
}

describe("Creating users scenarios",  () => {
    let userRepository: InMemoryUserRepository

    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
    })

    it("should add a new user", async () => {
        //GIVEN
        const oneUser:CreateUSerDTO = {
            username: new UserName("cédric"),
            useremail: new UserEmail("cedric.ngoune@yahoo.fr"),
            password: new UserPassword("cedric.dollars")
        };
        const userSut = new UserServiceImpl(userRepository);
        //WHEN
        const userCreated = await userSut.createUser(oneUser);

        //THEN
        expect(userCreated).toHaveProperty("id");
        expect(userCreated).toHaveProperty("username")
        expect(userCreated).toHaveProperty("useremail")
        expect(userCreated).toHaveProperty("password")
        expect(userCreated.id).toEqual(expect.any(String));
    })
    it('should not add a new user with an existing email', () => {
        const secondUser: CreateUSerDTO = {
            username: new UserName("Fabrice"),
            useremail: new UserEmail("cedric.ngoune@yahoo.fr"),
            password: new UserPassword("fabrice")
        }
        // Given, When , Then
       const result =  createUserService.createUser(secondUser)
        expect(result).toThrowError(new ExistingEmailError("existing email"))
    })

})





