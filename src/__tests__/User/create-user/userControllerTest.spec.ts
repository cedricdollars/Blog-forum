import {createUserController} from "../../../modules/Users/Infrastructure/http/controllers";
import {UserServiceImpl} from "../../../modules/Users/application/usesCases";
import {Request, Response} from "express";
import supertest from "supertest";
import {CreateUSerDTO} from "../../../modules/Users/domain/dto/createUserDTO";
import {UserEmail, UserName, UserPassword} from "../../../modules/Users/domain/vo";

jest.mock("../../../modules/Users/application/UsesCases")

describe('Users Controllers - Create users ', function () {
    const data:CreateUSerDTO = {
        username: new UserName("cédric"),
        useremail: new UserEmail("cedric.ngoune@yahoo.fr"),
        password: new UserPassword("cedric.dollars")
    }
    let mockRequest: Partial<Request>
    let mockResponse: Partial<Response>


    afterEach(() => {
        mockRequest = {}
        mockResponse = {
            json: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("Should call the createUser method once", () => {
        const spy = jest.spyOn(UserServiceImpl.prototype, "createUser")
        createUserController.execute(data)
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it('should invoke UserService once when the execute method is called', async() => {
        const result  = await createUserController.execute(data)
        expect(result).not.toBe(undefined)
        expect(UserServiceImpl).toHaveBeenCalledTimes(1)
    })
    it('should get 201 status when adding new user', async() =>{
        mockRequest = {
            body: {
                username: "cédric",
                useremail: "cedricdollars@gmail.com",
                password: "ebenezer"
            }
        }
    })

});
describe("Users controller - Get users", () => {

})