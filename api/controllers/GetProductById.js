'use strict'
const { product } = require('../../utils/fixtures')

function GetProductById(req, res) {
  res.json(product)
}

module.exports = {
  GetProductById
}