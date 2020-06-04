exports.notFoundPage = (req, res, next) => {
  res.status(404).send('<h1>The Page Is Not Found </h1>')
}
exports.serverError = (error, req, res, next) => {
  res.status(500).send(`<h1>Server Error ${error}</h1>`)
}
