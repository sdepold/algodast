var _ = require('lodash')

var findPairs = module.exports = function(pairs) {
  switch (pairs) {
    case 0:
      return []
    case 1:
      return ['()']
    default:
      var result = []

      findPairs(pairs - 1).forEach(function(pair) {
        result = result.concat(["(" + pair + ")", "()" + pair, pair + "()"])
      })

      return _.uniq(result)
  }
}
