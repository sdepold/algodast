var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-8-2.js'))

describe('Chapter 8.2', function() {
  var tests = {
    2: 2,
    3: 6,
    4: 20
  }

  Object.keys(tests).forEach(function(input) {
    var output = tests[input]

    it("calculates number of possible paths for an " + input + "x" + input + " grid", function() {
      expect(fun(input)).to.eql(output)
    })
  })
})
