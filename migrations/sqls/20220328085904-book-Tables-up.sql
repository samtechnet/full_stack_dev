 CREATE TABLE bookTables (
    id SERIAL PRIMARY KEY,
    Title VARCHAR(100), 
    Author VARCHAR(100), 
    Total_pages INTEGER,
    Book_type VARCHAR(100),
    Summary VARCHAR
);