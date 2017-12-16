const express = require('express')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./server/routes/books')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// tells express to look in puplic folder for html/css styling
app.use(express.static(path.join(__dirname, '/public')))

// set 'html' as the engine, using ejs's renderFile function
app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')

app.use('/', routes)


// express route for POST requests to db
// app.post('/countVote', (req, res) => {
//   db.addVote(req.body.chosenPhoto, req.body.thumb, req.body.increasingVote)
//     .then(message => res.json(message))
//     .catch(e => console.log(e));
// });

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port)
})

module.exports = app
