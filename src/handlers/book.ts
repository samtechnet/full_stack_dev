import express, { Request, Response } from "express";
import { book, bookTable } from "../models/book";

const table = new bookTable();
const index = async (req: Request, res: Response) => {
   try {
    const books = await table.index();
    res.json(books);
   } catch (error) {
       res.status(400);
       res.json(error);
   }
}

const create = async (req: Request, res: Response) => {
    try {
        const book: book = {
            Title: req.body.Title,
            Author: req.body.Author,
            Total_pages: req.body.Total_pages,
            Book_type: req.body.Book_type,
            Summary: req.body.Summary
        }
        const newBook = await table.create(book);
        res.json(newBook);
    } catch (error) {
        res.status(400);
        res.json(error)
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const book = await table.show(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(400);
        res.json(error)
    }
}
const update = async (req: Request, res: Response) => {
    try {
        const updatedbooks = await table.update(req.params.id, req.body.Title, req.body.Author);
     res.json(updatedbooks);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
 
const destroy = async (req: Request, res: Response) => {
    try {
        const deletedbook = await table.delete(req.params.id);
     res.json(deletedbook);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
 }

const book_routes = (app: express.Application) => {
    app.get("/books", index);
    app.get("/books/:id", show);
    app.post("/books", create);
    app.put("/books/:id", update);
    app.delete("/books/:id", destroy);
}

export default book_routes;