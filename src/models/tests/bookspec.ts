// import {book, bookTable } from "../book";
import { book, bookTable } from "../book";
const table = new bookTable();

describe('book table model', () => {
    it('should have an index method', () => {
        expect(table.index).toBeDefined();
    });
    it('index should return a list of book properties', async () => {
        const result = await table.index();
        expect(result).toEqual([]);
    })
})