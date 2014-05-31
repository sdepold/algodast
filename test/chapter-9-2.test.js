var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-9-2.js'))

describe('Chapter 9.1', function() {
  it("works", function() {
    var input = ['abc', 'abb', 'cab', 'acb', 'bab', 'bba']
      , output = ['abc', 'cab', 'acb', 'abb', 'bab', 'bba']

    expect(fun(input)).to.eql(output)
  })
})
