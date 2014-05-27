var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-9-1.js'))

describe('Chapter 9.1', function() {
  it("works", function() {
    var arr1 = Array(10)
      , arr2 = [4,5,6,7,9]

    arr1[0] = 1
    arr1[1] = 2
    arr1[2] = 8
    arr1[3] = 10
    arr1[4] = 200

    fun(arr1, arr2)

    expect(arr1).to.eql([1,2,4,5,6,7,8,9,10,200])
  })
})
