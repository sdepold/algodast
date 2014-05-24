var findPermutations = module.exports = function(s) {
  switch (s.length) {
    case 0: return [""]
    case 1: return [s]
    case 2: return [ s[0] + s[1], s[1] + s[0] ]
    default:
      var result = []

      for (var i = 0, e = s.length; i < e; i++) {
        (function(char, s) {
          findPermutations(s).forEach(function(word) {
            result.push(char + word)
          })
        })(s[i], s.substr(0, i) + s.substr(i+1))
      }

      return result
  }
}
