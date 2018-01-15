'use strict'
const { categoriesFilter, product, categories } = require('../../utils/fixtures')

function GetProductByBrand(req, res) {
  res.json({
    productLists: [product],
    filters: {
      categories: categoriesFilter
    },
    totalCount: 1
  })
}

module.exports = {
  GetProductByBrand
}