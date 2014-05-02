var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-2'))

describe('chapter-1-2', function() {
  ([
    ['\0', '\0'],
    ['abc\0', 'cba\0'],
    ['a\0', 'a\0'],
    ['abcdefg\0', 'gfedcba\0']
  ]).forEach(function(args) {
    it('reverses ' + args[0] + ' to ' + args[1], function() {
      expect(fun(args[0])).to.eql(args[1])
    })
  })
})
