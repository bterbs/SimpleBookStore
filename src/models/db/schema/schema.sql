-- DROP DATABASE IF EXISTS bookstore_books;
-- CREATE DATABASE bookstore_books;

\c bookstore_books

DROP TABLE IF EXISTS books;

CREATE TABLE books (
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) DEFAULT ' ',
  genre VARCHAR(255) NOT NULL,
  height VARCHAR(255) NOT NULL,
  publisher VARCHAR(255) DEFAULT ' '
);
