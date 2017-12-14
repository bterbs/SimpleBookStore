const express = require('express')
const pug = require('pug')
const ejs = require('ejs')

const app = express()

app.use(express.static('./src/view'))

// set 'html' as the engine, using ejs's renderFile function
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.get('/', (request, response) => {
  response.render('.src/view/index')
})

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port)
})

module.exports = app
