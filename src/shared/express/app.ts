import  express  from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import {routes} from "../api/v1"
dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/v1/",routes);
app.use(((req, res, next) => {
    const error = new Error("Resource not found");
    const errorStatus: number = 404 || 500
    res.statusCode = 404
    res.status(errorStatus)
    res.send({
        message: error.message,
        status: errorStatus
    })
    next(error)
}))

export default app
