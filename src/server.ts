import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import book_routes from "./handlers/book";


dotenv.config(); 

const app: express.Application = express();
const address: string = "0.0.0.0:3001";

app.use(bodyParser.json());

book_routes(app)

app.get("/", async function (req: Request, res: Response) {
  
  res.send("this is server");
 
  
});

console.log(process.env.POSTGRES_USER)
app.listen(3001, function () {
  console.log(`starting app on: ${address}`);
});