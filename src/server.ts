import  express  from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import {routes} from "./shared/api/v1";

dotenv.config();

const server = express();
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use("/api/v1", routes);
const PORT = process.env.NODE_PORT

server.get("/", (req, res) => {
    return res.json({message: "API blog"});
})
server.listen(PORT, async () => {
    console.log('Listen on ' +PORT);
})