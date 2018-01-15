'use strict'
const { featuredCategories } = require('../../utils/fixtures')

function GetFeaturedCategories(req, res) {
  res.json(featuredCategories)
}

module.exports = {
  GetFeaturedCategories
}