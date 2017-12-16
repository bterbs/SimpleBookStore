const db = require('./db')

/**
 * READ
 * Queries the database to (return) all the books in library.
 * @returns {Promise} Resolving to object representing all the books
 */
const getBooks = function () {
  return db.any('SELECT * FROM books')
}

const addBook = function () {
  return db.none()
}

module.exports = getBooks
