import {UserPassword} from "../../../src/modules/Users/domain/value-objects";
import {UserInputError} from "../../../src/modules/Users/domain/Errors";


describe("User password validation ", () => {
    it("shouldn't accept password with less than 3 characters", () => {
        expect(() => new UserPassword(""))
            .toThrowError(new UserInputError("Password must contains at least 3 characters"))
    })
    it('Should get hashed password', () => {
        expect(UserPassword.hashPassword("aze")).not.toBeNull();

    })
})