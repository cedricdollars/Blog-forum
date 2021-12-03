import express, {Request, Response} from "express";
import {userRouter} from "../../modules/Users/Infrastructure/http/routes";

const routes = express.Router()

routes.use('/users', userRouter)

export {routes}