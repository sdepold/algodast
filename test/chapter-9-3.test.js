var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-9-3.js'))

describe('Chapter 9.3', function() {
  it("works", function() {
    var input  = [15,16,19,20,1,3,4,5,7,10,14]
      , needle = 5
      , output = 8

    expect(fun(input, needle)).to.eql(output)
  })
})
