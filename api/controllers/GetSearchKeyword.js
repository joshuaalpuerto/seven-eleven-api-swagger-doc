'use strict'
const { product } = require('../../utils/fixtures')

function GetSearchKeyword(req, res) {
  res.json({
    productList: [product],
    totalCount: 1
  })
}

module.exports = {
  GetSearchKeyword
}