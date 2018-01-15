'use strict'
const { promos } = require('../../utils/fixtures')

function GetAllPromos(req, res) {
  res.json(promos)
}

module.exports = {
  GetAllPromos
}