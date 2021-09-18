import {User} from "../../../../src/core/domain/user/entity/User";
import faker from "faker"
import {UserName} from "../../../../src/core/domain/user/value_objects/UserName";
import {UserEmail} from "../../../../src/core/domain/user/value_objects/UserEmail";

export const createUserFactory = (): User => new User(
    faker.random.uuid(),
    faker.name.firstName() as unknown as UserName,
    faker.internet.email() as unknown as UserEmail,
    faker.internet.password(),
    faker.date.between(faker.date.past(2), faker.date.recent()) as unknown as string
);
describe("Create user usecases", () => {

})


