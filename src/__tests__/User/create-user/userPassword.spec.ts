import {UserPassword} from "../../../modules/Users/domain/vo";
import {UserInputError} from "../../../shared/errors/user-input-error";


describe("User password validation ", () => {
    it("shouldn't accept password with less than 3 characters", () => {
        expect(() => new UserPassword(""))
            .toThrowError(new UserInputError("Password must be filled"))
    })

    it("Should get value of password", () => {

    })
})