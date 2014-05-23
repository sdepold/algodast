var findSubsets = module.exports = function(set) {
  if (set.length === 0) {
    return null
  } else {
    var result = [ JSON.parse(JSON.stringify(set)), [ set.pop() ] ]
      , subset = findSubsets(set)

    if (subset !== null) {
      result = result.concat(subset)
    }

    // remove duplicate sets
    return result.reduce(function(acc, set) {
      if (acc.map(function(s) { return JSON.stringify(s) }).indexOf(JSON.stringify(set)) === -1) {
        acc.push(set)
      }

      return acc
    }, [])
  }
}
