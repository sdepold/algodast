var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-8-3.js'))

describe('Chapter 8.3', function() {
  ([
    [ ['a'], [['a']] ],
    [ ['a', 'b'], [['a', 'b'], ['b'], ['a']] ]
  ]).forEach(function(test) {
    it("transforms " + test[0] + " into " + test[1], function() {
      expect(fun(test[0])).to.eql(test[1])
    })
  })
})
