'use strict'
const { promos } = require('../../utils/fixtures')

function GetAllPromos(req, res) {
  console.log(promos)
  res.json(promos)
}

module.exports = {
  GetAllPromos
}