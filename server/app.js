/* eslint-disable comma-dangle */
const express = require('express')
const app = express()
const router = require('./controllers')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const compression = require('compression')
const errorController = require('./controllers/error')
const bodyParser = require('body-parser')
const morganLogPath = path.join(
  __dirname,
  '..',
  'client',
  'public',
  'morganLog',
  'access.log'
)
const morganLogStream = fs.createWriteStream(morganLogPath, { flags: 'a' })
app.use(morgan('combined', { stream: morganLogStream }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(
  express.static(path.join(__dirname, '..', 'client', 'build'), {
    maxAge: '30d',
  })
)
app.use(router)
app.disable('x-powered-by')

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'), {
    maxAge: '30d',
  })
})
app.use(errorController.notFoundPage)
app.use(errorController.serverError)
module.exports = app
