const promos = require('./promos')
const promo = require('./promo')
const product = require('./product')
const currentPoints = require('./current_points')
const walletTransactions = require('./wallet_transactions')
const orderResponse = require('./order_response')
const featuredCategories = require('./categories_featured')
const categories = require('./categories')

module.exports = {
  promos,
  promo,
  product,
  currentPoints,
  walletTransactions,
  orderResponse,
  featuredCategories,
  categories
}