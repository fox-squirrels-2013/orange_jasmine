FRUIT_BEARING_AGE = 3
MAX_AGE = 10

function createTree() {


  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    dropOrange: function() {
      if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount -= 1
        return 1
      }
    },
    grow: function() {
      this.age += 1;
      this.height += 10;
      if (this.age === FRUIT_BEARING_AGE) {
        this.orangeCount = Math.floor(Math.random()*10 + 1)
      };
      if (this.age > MAX_AGE) {
        this.isAlive = false
      };
    }
  }
  return tree
}

function createOrange() {
  var orange = {
    diameter: Math.floor(Math.random() * 10 + 1)
  }
  return orange
}
