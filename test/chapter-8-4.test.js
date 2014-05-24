var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-8-4.js'))

describe('Chapter 8.4', function() {
  ([
    [ 'a', ['a'] ],
    [ 'ab', ['ab', 'ba'] ],
    [ 'abc', ['abc', 'acb', 'cab', 'bca', 'bac', 'cba'] ]
  ]).forEach(function(test) {
    it("transforms " + test[0] + " into " + test[1], function() {
      expect(fun(test[0]).sort()).to.eql(test[1].sort())
    })
  })
})
