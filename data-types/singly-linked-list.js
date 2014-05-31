var SinglyLinkedList = module.exports = function() {
  this.head = null
  this.tail = null
}

SinglyLinkedList.createNode = function(data) {
  return { data: data, next: null }
}

SinglyLinkedList.prototype.add = function(data) {
  var node = SinglyLinkedList.createNode(data)

  if (this.head === null) {
    this.head = this.tail = node
  } else {
    this.tail = this.tail.next = node
  }

  return node
}

SinglyLinkedList.prototype.toArray = function() {
  var result = []
    , node   = this.head

  while(node) {
    result.push(node.data)
    node = node.next
  }

  return result
}
