var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

describe('fun', function() {
  it("returns the minimum", function() {
    var stack = new dataTypes['stack']

    stack.push(4)
    stack.push(2)
    stack.push(3)
    stack.push(1)
    stack.push(10)

    expect(stack.min()).to.eql(1)
    stack.pop()
    expect(stack.min()).to.eql(1)
    stack.pop()
    expect(stack.min()).to.eql(2)
  })
})
