import express, {Request, Response} from "express";
import {createUserController} from "../controllers";
const userRouter = express.Router();

userRouter.get("/", ((request: Request, response:Response) => {
    return response.json('Yo')
}))
userRouter
    .post('/add', async (req,res) => {
       try {
           const result = await createUserController.execute(req.body)
           res.json(result)

       }catch (e){
            console.log(e.message)
       }
    })

export { userRouter }