const currentPoints = require('./current_points')
module.exports = {
  ...currentPoints,
  transactions: [{
    product: {
      cliqqCode: "0001",
      name: "Choco mocho"
    },
    datetime: "2018-01-15T03:42:15.036Z",
    points: 2,
    type: "plus"
  }, {
    product: {
      cliqqCode: "0001",
      name: "Choco mocho"
    },
    datetime: "2018-01-15T03:42:15.036Z",
    points: 10,
    type: "minus"
  }]
}