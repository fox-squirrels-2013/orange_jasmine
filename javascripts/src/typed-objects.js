// Write your Orange Tree code here - you may use constructor functions 
FRUIT_BEARING_AGE = 10 
MAX_AGE = 20

function Tree() {
  this.age = 0
  this.height = 0
  this.orangeCount = 0
  this.isAlive = true 
  this.oranges = []
}

Tree.prototype.grow = function() {
  if(!this.isAlive)
    return

  this.age += 1 
  this.height += 10
  if (this.age >= FRUIT_BEARING_AGE) {
    numOfOranges = Math.floor((Math.random() * 10) + 1)
    this.orangeCount += numOfOranges
    for ( var i = 0; i < numOfOranges; i++ ) {
      this.oranges.push(new Orange())
    }
  }
  if (this.age > MAX_AGE) {
    this.isAlive = false
  }
}

Tree.prototype.dropOrange = function() {
  if(this.orangeCount > 0)
    --this.orangeCount

  return this.oranges.pop()
}

function Orange() {
  this.diameter = 10
}