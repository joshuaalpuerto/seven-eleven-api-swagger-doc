'use strict'
const { categoriesFilter, brandsFilter, product, categories } = require('../../utils/fixtures')

function GetProductByCategory(req, res) {
  res.json({
    productLists: [product],
    filters: {
      categories: categoriesFilter,
      brands: brandsFilter
    },
    totalCount: 6
  })
}

module.exports = {
  GetProductByCategory
}