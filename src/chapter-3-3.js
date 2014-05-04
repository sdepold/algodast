/*
  Imagine a (literal) stack of plates If the stack gets too high, it might
  topple There- fore, in real life, we would likely start a new stack when
  the previous stack exceeds some threshold Implement a data structure
  SetOfStacks that mimics this SetOf- Stacks should be composed of several
  stacks, and should create a new stack once the previous one exceeds capacity
  SetOfStacks push() and SetOfStacks pop() should behave identically to a
  single stack (that is, pop() should return the same values as it would if
  there were just a single stack)
  FOLLOW UP
  Implement a function popAt(int index) which performs a pop operation on a specific sub-stack
*/

var path  = require('path')
  , Stack = require(path.resolve(__dirname, 'chapter-3-0')).Stack

var SetOfStacks = module.exports = function(threshold) {
  this.threshold = threshold || 10
  this.set       = new Stack()
}

SetOfStacks.prototype.lengthOf = function(stack) {
  var length  = 0
    , current = stack.top

  while (current) {
    length++
    current = current.next
  }

  return length
}

SetOfStacks.prototype.push = function(data) {
  if (this.lengthOf(this.set) === 0) {
    // initialize the first stack
    this.set.push(new Stack())
  }

  this.set.top.data.push(data)

  if (this.lengthOf(this.set.top.data) === this.threshold) {
    // initialize a new stack as this one is full
    this.set.push(new Stack())
  }
}

SetOfStacks.prototype.pop = function() {
  var node = this.set.top.data.pop()

  if (this.lengthOf(this.set.top.data) === 0) {
    this.set.pop()
  }

  return node
}

SetOfStacks.prototype.popAt = function(stackIndex) {
  var result   = null
    , setCount = this.lengthOf(this.set)
    , stack    = this.set.top
    , prev     = null

  if (setCount < (stackIndex + 1)) {
    throw Error("Stack with index" + stackIndex + " not found!")
  } else {
    for (var i = 0; i < stackIndex; i++) {
      prev  = stack
      stack = stack.next
    }

    result = stack.data.pop()

    if (this.lengthOf(stack.data) === 0) {
      if (prev === null) {
        this.set.top = stack.next
      } else {
        prev.next = stack.next
      }
    }

    return result
  }
}

SetOfStacks.prototype.print = function() {
  var result    = []
    , current   = this.set.top
    , tmp       = null
    , subResult = null

  while (current) {
    subResult = []
    tmp       = current.data.top

    while (tmp) {
      subResult.push(tmp.data)
      tmp = tmp.next
    }

    result.push(subResult)
    current = current.next
  }

  console.log(result)
}
