var Stack = function() {
  this.top = null
}

Stack.createNode = function(data) {
  data = (typeof data === 'undefined') ? null : data
  return { data: data, next: null }
}

Stack.prototype.push = function(data) {
  var node = Stack.createNode(data)
  node.next = this.top
  this.top = node
}

Stack.prototype.pop = function() {
  var node = this.top

  if (node !== null) {
    this.top = this.top.next
  }

  return node
}

Stack.prototype.length = function() {
  var length  = 0
    , current = this.top

  while (current) {
    length++
    current = current.next
  }

  return length
}

Stack.prototype.isEmpty = function() {
  return this.top === null
}

Stack.prototype.peek = function() {
  return this.top
}

Stack.prototype.toArray = function() {
  var result  = []
    , current = this.top

  while (current) {
    result.push(current.data)
    current = current.next
  }

  return result
}

Queue = function() {
  this.head = null
  this.tail = null
}

Queue.prototype.enqueue = function(data) {
  var node = Stack.createNode(data)

  if (this.head === null) {
    this.head = this.tail = node
  } else {
    this.tail = this.tail.next = node
  }
}

Queue.prototype.dequeue = function() {
  var node = this.head

  if (node) {
    this.head = this.head.next
  }

  return node
}

module.exports = {
  Stack: Stack,
  Queue: Queue
}
