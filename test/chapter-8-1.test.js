var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-8-1.js'))

describe('Chapter 8.1', function() {
  var tests = {
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55
  }

  Object.keys(tests).forEach(function(input) {
    var output = tests[input]

    it("calculates the " + input + "th fibonacci number", function() {
      expect(fun(input)).to.eql(output)
    })
  })
})
