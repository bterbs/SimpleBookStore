// Proper way to initialize and share the Database object
// Loading and initializing the library:
const pgp = require('pg-promise')()

// Declaring connection details
// `pg://${process.env.USER}@${process.env.LOCAL_HOST}/${process.env.DB_NAME}`
const connectionString = 'postgres://localhost:5432/bookstore_books'

// Creating a new database instance from the connection details:
const db = pgp(connectionString)


// Exporting the database object for shared use:
module.exports = db;
