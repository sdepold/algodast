/*
  Write a program to sort a stack in ascending order. You should not make any
  assump- tions about how the stack is implemented. The following are the only
  functions that should be used to write this program: push | pop | peek | isEmpty.
*/

var path  = require('path')
  , Stack = require(path.resolve(__dirname, 'chapter-3-0')).Stack

module.exports = function(stack) {
  var tmp     = new Stack()
    , current = null

  while (current = stack.pop()) {
    if (tmp.isEmpty() || (current.data < tmp.peek().data)) {
      tmp.push(current.data)
    } else {
      var headValue = tmp.pop().data

      stack.push(headValue)

      while (!tmp.isEmpty() && (tmp.peek().data < current.data)) {
        stack.push(tmp.pop().data)
      }

      tmp.push(current.data)

      while(stack.peek().data !== headValue) {
        tmp.push(stack.pop().data)
      }

      tmp.push(stack.pop().data)
    }
  }

  return tmp
}
