import express from 'express'
import {userRoutes} from "../../modules/Users/Infrastructure/http/routes";

const routes = express.Router()

routes.get("/", ((req, res) => {
    return res.json({
        message: "Yo what's up"
    })
}))
routes.use('/users', userRoutes)

export {routes}