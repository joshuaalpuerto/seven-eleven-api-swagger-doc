'use strict'
const { product, brands } = require('../../utils/fixtures')

function GetProductById(req, res) {
  res.json({ 
    brand: brands[0],
    ...product,

  })
}

module.exports = {
  GetProductById
}