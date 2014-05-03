/*
  Experimenting with singly linked lists.
  Good article: http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html?start=1
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

SLL.prototype.remove = function(data) {
  var current = this.head
    , prev    = null

  while (current) {
    if (current.data === data) {
      if (prev === null) {
        this.head = current.next
      } else {
        prev.next = current.next
      }
    }

    prev    = current
    current = current.next
  }
}

SLL.prototype.insert = function(needle, data) {
  var current = this.head

  while (current) {
    if (current.data === needle) {
      var node = SLL.createNode(data)

      node.next    = current.next
      current.next = node
    }

    current = current.next
  }
}

SLL.prototype.at = function(index) {
  var current = this.head

  while (index !== 0) {
    if (current.next) {
      current = current.next
    } else {
      return null
    }

    index--
  }

  return current
}

SLL.prototype.each = function(fun) {
  var current = this.head

  while (current) {
    fun(current)
    current = current.next
  }
}
