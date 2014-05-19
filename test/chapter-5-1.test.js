var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-5-1.js'))

describe('Chapter 5.1', function() {
  it("works", function() {
    expect(
      fun(
        parseInt('10000000000', 2),
        parseInt('10101', 2),
        2,
        6
      )
    ).to.eql(parseInt('10001010100', 2))
  })
})
