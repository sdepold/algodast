module.exports = function(arr) {
  return arr.sort(function(a,b) {
    return a.split('').sort().join('') < b.split('').sort().join('')
  })
}
