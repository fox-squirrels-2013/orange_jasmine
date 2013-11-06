
FRUIT_BEARING_AGE = 3
MAX_AGE = 10

function createTree() {


  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function() {
      this.age += 1;
      this.height += 10;
      if (this.age === FRUIT_BEARING_AGE) {
        this.orangeCount = Math.random()
      };
      if (this.age > MAX_AGE) {
        this.isAlive = false
      }
    }
  }
  return tree
}
