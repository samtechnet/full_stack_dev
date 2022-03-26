import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app: express.Application = express();
const address: string = "0.0.0.0:3001";

app.use(bodyParser.json());


app.get("/", async function (req: Request, res: Response) {
 
 res.send('This is server page')
 
  
});

console.log(process.env.POSTGRES_USER)
app.listen(3001, function () {
  console.log(`starting app on: ${address}`);
});