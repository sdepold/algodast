var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-4'))

describe('chapter-1-4', function() {
  ;([
    ['', ''],
    ['a', 'a'],
    ['ab', 'ab'],
    ['aba', 'aab'],
    ['abcde', 'ecbda']
  ]).forEach(function(args) {
    it("returns true as '" + args[0] + "' and '" + args[1] + "' are anagramts", function() {
      expect(fun(args[0], args[1])).to.be.ok()
    })
  })

  ;([
    ['', 'a'],
    ['a', 'b'],
    ['aa', 'bb'],
    ['aab', 'aaba']
  ]).forEach(function(args) {
    it("returns false as '" + args[0] + "' and '" + args[1] + "' aren't anagramts", function() {
      expect(fun(args[0], args[1])).to.not.be.ok()
    })
  })
})
