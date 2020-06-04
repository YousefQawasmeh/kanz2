const express = require('express')
const app = require('./app')
const port = process.env.PORT || 4000
app.set('port', port)

app.listen(app.get('port'), () => {
  console.log(`The server is running on port ${app.get('port')} `)
})
