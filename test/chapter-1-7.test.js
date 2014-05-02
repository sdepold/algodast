var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-7'))

describe('chapter-1-7', function() {
  it("rotates the image", function() {
    var source = [
      [1,2,3,4],
      [2,0,4,1],
      [3,4,1,2],
      [4,1,2,0]
    ]

    var expectation = [
      [1,0,3,0],
      [0,0,0,0],
      [3,0,1,0],
      [0,0,0,0]
    ]

    expect(fun(source)).to.eql(expectation)
  })
})
