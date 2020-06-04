const fs = require('fs')
const path = require('path')

const dbConnection = require('./db_connection')

const buildDB = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString()
const insertValues = fs.readFileSync(path.join(__dirname, 'init_value.sql')).toString()

const runDbBuild = (buildDB, insertValues) => {
  return dbConnection
    .query(buildDB)
    .then(res => {
      dbConnection.query(insertValues).then(res => res)
    })
    .catch(err => err)
}

runDbBuild(buildDB, insertValues)

module.exports = runDbBuild
