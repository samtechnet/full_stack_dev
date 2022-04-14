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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookTable = void 0;
const database_1 = __importDefault(require("../database"));
class bookTable {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT * FROM bookTables";
                const res = yield conn.query(sql);
                conn.release();
                return res.rows;
            }
            catch (error) {
                throw new Error(`could not fetch data from the db ${error}`);
            }
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "INSERT INTO bookTables(Title, Author, Total_pages, Book_type, Summary) VALUES ($1, $2, $3, $4, $5) RETURNING *";
                const values = [book.Title, book.Author, book.Total_pages, book.Book_type, book.Summary];
                const res = yield database_1.default.query(sql, values);
                conn.release();
                return res.rows[0];
            }
            catch (error) {
                throw new Error(`could not add new book ${book.Title, book.Author, book.Total_pages, book.Book_type, book.Summary}. Error: ${error}`);
            }
        });
    }
    ;
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM bookTables WHERE id=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Could not find book ${id}. Error: ${error}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM bookTables WHERE id= ($1) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                const book = result.rows[0];
                conn.release();
                return book;
            }
            catch (error) {
                throw new Error(`Could not delete book ${id}. Error: ${error}`);
            }
        });
    }
    update(id, Title, Author) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'UPDATE bookTables SET  Title= ($1), Author = ($2) WHERE id =($3) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [Title, Author, id]);
                const book = result.rows[0];
                conn.release();
                return book;
            }
            catch (error) {
                throw new Error(`could not update book of id${id}, Error${error}`);
            }
        });
    }
}
exports.bookTable = bookTable;
