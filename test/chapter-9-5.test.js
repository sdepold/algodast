var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-9-5.js'))

describe('Chapter 9.5', function() {
  it("works", function() {
    var input  = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]

    expect(fun(input, 'ball')).to.eql(4)
  })

  it("returns -1", function() {
    var input  = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]

    expect(fun(input, 'ballcar')).to.eql(-1)
  })
})
