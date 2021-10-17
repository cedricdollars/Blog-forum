import express from "express";
import {CreateUserController} from "../controllers/create-user-controller";

const userRoutes = express.Router();

userRoutes
    .post('/create-user',
        ((req, res) => CreateUserController.execute(req, res) ))


export { userRoutes }