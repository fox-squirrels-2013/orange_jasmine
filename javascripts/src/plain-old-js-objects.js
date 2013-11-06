/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 5
MAX_AGE = 50

function createOrange() {
  var orange = {
    diameter: 1
  }
  return orange
}

function createTree() {
  var tree = {
    age: 0,
    height: 0,
    oranges: [],
    orangeCount: 0,
    isAlive: true,
    grow: function(){
      this.age += 1
      this.height += 10
      if (this.age >= FRUIT_BEARING_AGE){
        var num_new_oranges = (Math.ceil(Math.random()*5))
        this.orangeCount += num_new_oranges
        for (var i=num_new_oranges; i>0; i--) {
          this.oranges.push(createOrange())
        }
      }
      if (this.age > MAX_AGE){
        this.isAlive = false
      }
    },
    dropOrange: function(){
      return "something"
    },
  }
  return tree
}



// var createTree = function() {
//   this.age = 0
// };

// tree = new createTree()
