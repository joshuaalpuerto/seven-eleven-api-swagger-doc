const promos = require('./promos')
const promo = require('./promo')
const product = require('./product')
const currentPoints = require('./current_points')
const walletTransactions = require('./wallet_transactions')
const orderResponse = require('./order_response')
const featuredCategories = require('./categories_featured')
const categories = require('./categories')
const brands = require('./brands')
const categoriesFilter = require('./categories_filter')
const brandsFilter = require('./brands_filter')

module.exports = {
  promos,
  promo,
  product,
  currentPoints,
  walletTransactions,
  orderResponse,
  featuredCategories,
  categories,
  brands,
  categoriesFilter,
  brandsFilter
}