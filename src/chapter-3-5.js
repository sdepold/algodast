/*
  Implement a MyQueue class which implements a queue using two stacks
*/

var path  = require('path')
  , Stack = require(path.resolve(__dirname, 'chapter-3-0')).Stack

var MyQueue = module.exports = function() {
  this.s1 = new Stack()
  this.s2 = new Stack()
}

MyQueue.prototype.enqueue = function(data) {
  this.s1.push(data)
}

MyQueue.prototype.dequeue = function() {
  this.shiftQueues(this.s1, this.s2)
  var result = this.s2.pop()
  this.shiftQueues(this.s2, this.s1)
  return result
}

MyQueue.prototype.shiftQueues = function(source, target) {
  var node;

  while (node = source.pop()) {
    target.push(node.data)
  }
}
