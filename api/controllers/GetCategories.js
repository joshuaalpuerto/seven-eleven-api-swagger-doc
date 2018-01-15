'use strict'
const { categories } = require('../../utils/fixtures')

function GetCategories(req, res) {
  res.json(categories)
}

module.exports = {
  GetCategories
}