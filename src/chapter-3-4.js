/*
  In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of
  different sizes which can slide onto any tower. The puzzle starts with disks
  sorted in ascending order of size from top to bottom (e.g., each disk sits on
  top of an even larger one). You have the following constraints:
  (A) Only one disk can be moved at a time.
  (B) A disk is slid off the top of one rod onto the next rod.
  (C) A disk can only be placed on top of a larger disk.
  Write a program to move the disks from the first rod to the last using Stacks.
*/

var path  = require('path')
  , Stack = require(path.resolve(__dirname, 'chapter-3-0')).Stack

var Hanoi = module.exports = function(diskCount) {
  this.diskCount = diskCount
  this.rods      = [ new Stack(), new Stack(), new Stack() ]

  for (var i = 0; i < this.diskCount; i++) {
    this.rods[0].push(this.diskCount - i)
  }
}

Hanoi.prototype.play = function() {
  var disk, target, diskSize;
  var moves = 0;

  while (!this.won()) {
    this.printState()

    var rod = this.pickRod()

    if (target = this.findTarget(rod.top)) {
      target.push(rod.pop().data)
    }

    moves++
  }

  this.printState()
  console.log('Won in ' + moves + ' steps!')
}

Hanoi.prototype.won = function() {
  return this.rods[this.rods.length - 1].length() === this.diskCount
}

Hanoi.prototype.pickRod = function() {
  var result = null

  while (!result) {
    var diskSize = Math.ceil(Math.random() * this.diskCount)
    result = this.findRod(diskSize)
  }

  return result
}

Hanoi.prototype.findRod = function(diskSize) {
  for (var i = this.rods.length - 1; i >= 0; i--) {
    var rod = this.rods[i]

    if (rod.top && (rod.top.data === diskSize)) {
      return rod
    }
  }

  return null
}

Hanoi.prototype.findTarget = function(disk) {
  var possibleTargets = []

  if (disk === null) {
    return null
  }

  for (var i = this.rods.length - 1; i >= 0; i--) {
    var rod = this.rods[i]

    if ((rod.top === null) || (rod.top.data > disk.data)) {
      return rod
    }
  }

  return null
}

Hanoi.prototype.printState = function() {
  console.log()
  this.rods.forEach(function(rod, i) {
    var current = rod.top
      , result  = []

    while (current) {
      result.push(current.data)
      current = current.next
    }

    console.log("Rod " + i + ":", result)
  })
}
