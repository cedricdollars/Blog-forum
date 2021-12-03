import { UserServices} from "../../../domain/services";
import {CreateUSerDTO} from "../../../domain/dto/createUserDTO";
import { Response} from "../../../../../shared/helpers/response";
import {UserDTO} from "../../../domain/dto/userDTO";


export class UserController {
    constructor(private readonly userService: UserServices) {
    }

    async execute(user: CreateUSerDTO):Promise<Response<UserDTO>> {
        try {
            const result = await this.userService.createUser(user)
            console.log(result)
            return Response.ok(result)

        }catch (e:any) {
            console.log(e.message)
            return Response.fail(e.message)
        }

    }

}