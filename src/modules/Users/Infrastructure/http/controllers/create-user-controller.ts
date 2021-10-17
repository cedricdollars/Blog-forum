import {CreateUserUseCase} from "../../../domain/usecases/create-user-use-case";
import {CreateUSerDTO} from "../../../domain/dto/createUserDTO";
import express from "express";

export class CreateUserController {
    private userUseCase: CreateUserUseCase

    constructor(useCase: CreateUserUseCase) {
        this.userUseCase = useCase
    }

    async execute(req: express.Request, res: express.Response):Promise<any> {
        let dto:CreateUSerDTO = req.body as CreateUSerDTO

        dto = {
            username:dto.username,
            useremail: dto.useremail,
            password: dto.password
        }
        const result = await this.userUseCase.create(dto)
    }
}