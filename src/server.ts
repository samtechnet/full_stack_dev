import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { book, bookTable } from "./models/book";


dotenv.config(); 

const app: express.Application = express();
const address: string = "0.0.0.0:3001";

app.use(bodyParser.json());

const myBookTables = new bookTable();

app.get("/", async function (req: Request, res: Response) {
  const book: book = {
    Title: 'Bridge to Terabithia',
    Author: 'Katherine Peterson',
    Total_pages: 208,
    Book_type: 'Childrens',
    Summary: 'A good book'

  }
  const myBookTables = new bookTable();
  const result = await myBookTables.create(book);
 
  res.send(result);
 
  
});

console.log(process.env.POSTGRES_USER)
app.listen(3001, function () {
  console.log(`starting app on: ${address}`);
});