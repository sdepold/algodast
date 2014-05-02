var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-6'))

describe('chapter-1-6', function() {
  it("rotates the image", function() {
    var source = [
      [1,2,3,4],
      [2,3,4,1],
      [3,4,1,2],
      [4,1,2,3]
    ]

    var expectation = [
      [4,3,2,1],
      [1,4,3,2],
      [2,1,4,3],
      [3,2,1,4]
    ]

    expect(fun(source)).to.eql(expectation)
  })
})
