var Queue = module.exports = function() {
  this.head = null
  this.tail = null
}

Queue.createNode = function(data) {
  return { data: data, next: null }
}

Queue.prototype.enqueue = function(data) {
  var node = Queue.createNode(data)

  if (this.head === null) {
    this.head = this.tail = node
  } else {
    this.tail = this.tail.next = node
  }

  return node
}

Queue.prototype.dequeue = function() {
  var node = this.head

  if (node) {
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }
  }

  return node && node.data
}

Queue.prototype.toArray = function() {
  var result = []
    , node   = this.head

  while (node) {
    result.push(node.data)
    node = node.next
  }

  return result
}
