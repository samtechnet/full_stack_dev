"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../models/book");
const table = new book_1.bookTable();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield table.index();
        res.json(books);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = {
            Title: req.body.Title,
            Author: req.body.Author,
            Total_pages: req.body.Total_pages,
            Book_type: req.body.Book_type,
            Summary: req.body.Summary
        };
        const newBook = yield table.create(book);
        res.json(newBook);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield table.show(req.params.id);
        res.json(book);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedbooks = yield table.update(req.params.id, req.body.Title, req.body.Author);
        res.json(updatedbooks);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedbook = yield table.delete(req.params.id);
        res.json(deletedbook);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const book_routes = (app) => {
    app.get("/books", index);
    app.get("/books/:id", show);
    app.post("/books", create);
    app.put("/books/:id", update);
    app.delete("/books/:id", destroy);
};
exports.default = book_routes;
