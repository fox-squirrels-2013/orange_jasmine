function Tree() {
  FRUIT_BEARING_AGE = 10
  MAX_AGE = 30

  this.age = 0
  this.height = 0
  this.orangeCount = 0
  this.isAlive = true

  this.dropOrange = function() {
    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount -= 1
      return 1
    }
  }

  this.grow = function() {
    this.age += 1
    this.height += 10

    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount = Math.floor(Math.random() * 10 + 1)
    }

    if (this.age > MAX_AGE) {
      this.isAlive = false
    }
  }
}

function CreateOrange() {
  var orange = new Tree()

  orange.diameter = Math.floor(Math.random() * 10 + 1)

  return orange
}