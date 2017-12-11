const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port)
})

module.exports = app
