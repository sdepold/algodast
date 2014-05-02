var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-5'))

describe('chapter-1-5', function() {
  ([
    ['', ''],
    ['a', 'a'],
    ['abc', 'abc'],
    ['abc abc', 'abc%20abc'],
    ['abc   abc', 'abc%20%20%20abc']
  ]).forEach(function(args) {
    it('modifies "' + args[0] + '" to "' + args[1] + '"', function() {
      expect(fun(args[0])).to.eql(args[1])
    })
  })
})
