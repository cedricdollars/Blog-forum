import  express  from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT

app.get("/", (req, res) => {
    return res.json({message: "API blog"});
})
app.listen(PORT, async () => {
    console.log('Listen on ' +PORT);
})