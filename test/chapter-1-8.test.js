var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-1-8'))

describe('chapter-1-8', function() {
  it("returns true if it is a rotation", function() {
    expect(fun('waterbottle', 'erbottlewat')).to.be.ok()
  })

  it("returns false if it is not a rotation", function() {
    expect(fun('waterbottle', 'rbottlewaet')).to.not.be.ok()
  })
})
