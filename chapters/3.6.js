var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(stack) {
  var result = new dataTypes['stack']

  while (!stack.isEmpty()) {
    var node = stack.pop()

    if (!result.isEmpty() && (result.peek().data < node.data)) {
      while (result.peek() && (result.peek().data < node.data)) {
        stack.push(result.pop().data)
      }
    }

    result.push(node.data)
  }

  return result
}

describe('fun', function() {
  it("returns the minimum", function() {
    var stack = new dataTypes['stack']

    stack.push(4)
    stack.push(2)
    stack.push(3)
    stack.push(1)
    stack.push(10)

    expect(fun(stack).toArray()).to.eql([1,2,3,4,10])
  })
})
