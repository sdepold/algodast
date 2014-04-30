var powr = module.exports = function(a, n) {
  if ((a === 0) && (n === 0)) { return undefined } // 0 ^ 0       = undefined
  else if (n === 0) { return 1 }                   // a ^ 0       = 1
  else if (n < 0) { return powr(1.0 / a, -n) }     // a ^ -n      = (a ^ -1) ^ n
  else if (n - 1 === 0) { return a }               // a ^ (n - 1) = a ^ 0 = a
  else { return a * powr(a, n - 1) }               // a ^ n       = a * a ^ (n - 1)
}
