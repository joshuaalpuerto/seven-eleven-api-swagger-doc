'use strict'
const { promo } = require('../../utils/fixtures')

function GetPromoById(req, res) {
  res.json(promo)
}

module.exports = {
  GetPromoById
}