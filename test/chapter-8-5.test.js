var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-8-5.js'))

describe('Chapter 8.5', function() {
  ([
    [ 1, [ '()' ]],
    [ 2, [ '(())', '()()' ] ],
    [ 3, [ '((()))', '(()())', '(())()', '()(())', '()()()' ] ]
  ]).forEach(function(test) {
    it("transforms " + test[0] + " into " + test[1], function() {
      expect(fun(test[0]).sort()).to.eql(test[1].sort())
    })
  })
})
