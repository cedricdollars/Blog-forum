import {UserName} from "../../src/domain/user/value_objects";
import {UserNameError} from "../../src/domain/user/common/Errors/user-name-error";

describe("UserName ", () => {

    it("Should no accept empty user name", () => {
        expect(() => UserName.userNameOf(""))
            .toThrowError(new UserNameError("username is required!"))
    })
    it('should no accept name whose contains non alphabetic character', () => {
        expect(() => UserName.userNameOf("Dollars45-").isValidName())
            .toThrowError(new UserNameError("user name should contain only letter"))
    })
    it("should accept name whose contains only alphabetic character", () => {
        expect<boolean>(UserName.userNameOf("dollars").isValidName()).toBeTruthy()
    })
})
