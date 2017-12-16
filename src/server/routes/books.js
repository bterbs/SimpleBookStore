const express = require('express')
const getBooks = require('../../models/db/books')

const router = express.Router()


router.get('/', (request, response) => {
  response.render('index')
})

// GET / (renders your homepage as HTML)
// GET /books (renders a list of books as HTML)
// Accepts: application/json
//
// GET /api/books (returns a json object of all the books)
// POST /api/books (takes a body, and creates a new book)

router.get('/api/books', (request, response) => {
  getBooks()
    .then((data) => {
      response.json(data)
    })
    .catch(e => console.log(e))
})

module.exports = router
