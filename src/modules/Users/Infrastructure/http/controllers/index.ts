import {UserController} from "./user-controller";
import {UserServiceImpl} from "../../../application/usesCases";
import {userRepo} from "../../repositories/in-memory";

const createUserService = new UserServiceImpl(userRepo)
const createUserController = new UserController(createUserService);

export {
    createUserController,
    createUserService
}