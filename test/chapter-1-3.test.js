var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-3'))

describe('chapter-1-3', function() {
  ([
    ['a', 'a'],
    ['abc', 'abc'],
    ['aabc', 'abc'],
    ['abcdaefg', 'abcdefg']
  ]).forEach(function(args) {
    it('reduces ' + args[0] + ' to ' + args[1], function() {
      expect(fun(args[0])).to.eql(args[1])
    })
  })
})
