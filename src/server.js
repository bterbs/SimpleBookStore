const express = require('express')
const pug = require('pug')

const app = express()

app.use(express.static('view'))

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port)
})

module.exports = app
