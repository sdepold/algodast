var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-1'))

describe('chapter-1-1', function() {
  ;([ '', 'a', 'abc' ]).forEach(function(validString) {
    it("returns true for '" + validString + "'", function() {
      expect(fun(validString)).to.be.ok()
    })
  })

  ;([ 'aa', 'aba', 'abba', 'abcdefga' ]).forEach(function(invalidString) {
    it("returns false for '" + invalidString + "'", function() {
      expect(fun(invalidString)).to.not.be.ok()
    })
  })
})
