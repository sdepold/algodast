var pow = module.exports = function(a, n) {
  if ((a === 0) && (n === 0)) { return undefined } // 0 ^ 0  = undefined
  else if (n === 0) { return 1 }                   // a ^ 0  = 1
  else if (n < 0) { return pow(1.0 / a, -n) }      // a ^ -n = (a ^ -1) ^ n
  else {                                           // a ^ n  = a * a * ... * a
    var result = 1

    for (var i = 0; i < n; i++) {
      result *= a
    }

    return result
  }
}
