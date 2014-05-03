/*
  Experimenting with singly linked lists.
*/

var SLL = module.exports = function() {
  this.head = null
  this.tail = null
}

SLL.createNode = function(data) {
  return { data: data || null, next: null }
}

SLL.prototype.push = function(data) {
  var node = SLL.createNode(data)

  if (this.head === null) {
    this.head = this.tail = node
  } else {
    this.tail = this.tail.next = node
  }
}

SLL.prototype.unshift = function(data) {
  if (this.head === null) {
    this.push(data)
  } else {
    var node  = SLL.createNode(data)
    node.next = this.head
    this.head = node
  }
}
