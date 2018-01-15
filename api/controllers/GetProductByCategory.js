'use strict'
const { categoriesFilter, brandsFilter, product } = require('../../utils/fixtures')

function GetProductByCategory(req, res) {
  res.json({
    productLists: [product],
    filters: {
      categories: categoriesFilter,
      brands: brandsFilter
    },
    totalCount: 1
  })
}

module.exports = {
  GetProductByCategory
}