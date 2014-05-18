var expect   = require('expect.js')
  , path     = require('path')
  , arr2tree = require(path.resolve(__dirname, '..', 'src', 'chapter-4-3.js'))
  , fun      = require(path.resolve(__dirname, '..', 'src', 'chapter-4-4.js'))

describe('chapter-4-3', function() {
  it('transforms an array into a binary search tree', function() {
    var tree = arr2tree([1,2,3,4,5,6,7])
      , arr  = fun({ root: tree })

    expect(arr[0].toArray()).to.eql([4])
    expect(arr[1].toArray()).to.eql([2,6])
    expect(arr[2].toArray()).to.eql([1,3,5,7])
  })
})
