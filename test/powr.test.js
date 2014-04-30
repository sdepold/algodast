var expect = require('expect.js')
  , path   = require('path')
  , powr   = require(path.resolve(__dirname, '..', 'src', 'powr'))

describe('powr', function() {
  [
    [0, 0, undefined],
    [0, 1, 0],
    [0, 2, 0],
    [0, 3, 0],
    [1, 0, 1],
    [1, 1, 1],
    [1, 2, 1],
    [1, 3, 1],
    [2, 0, 1],
    [2, 1, 2],
    [2, 2, 4],
    [2, 3, 8],
    [3, 0, 1],
    [3, 1, 3],
    [3, 2, 9],
    [3, 3, 27],
    [2, -1, 0.5],
    [2, -2, 0.25]
  ].forEach(function(arr) {
    var a = arr[0]
      , n = arr[1]
      , e = arr[2]

    describe(a + "^" + n, function() {
      it("returns " + e, function() {
        expect(powr(a, n)).to.eql(e)
      })
    })
  })
})
