const express = require('express')
const pug = require('pug')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'))
})

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port)
})

module.exports = app
