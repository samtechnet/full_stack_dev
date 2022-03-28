import client from "../database";

export type book = {
    Title: String,
    Author: String,
    Total_pages: Number,
    Book_type: String,
    Summary: String

}
export class bookTable{
    async index(): Promise<book[]>{
        await client.connect();
        const sql = "SELECT * FROM bookTables";
        const res = await client.query(sql);
        return res.rows;
    }

    async create(book: book) {
        await client.connect();
        const text = "INSERT INTO bookTables(Title, Author, Total_pages, Book_type, Summary) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [book.Title, book.Author, book.Total_pages, book.Book_type, book.Summary];
        const res = await client.query(text, values);
        
        return res.rows[0];
    }

}