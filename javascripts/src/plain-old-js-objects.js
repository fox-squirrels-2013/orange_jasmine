/* Write your code for the plain-old-js-objects-spec here */
var FRUIT_BEARING_AGE = 3;
var MAX_AGE = 50;

function createTree(){
  var tree = {
    age: 0,
    height: 0,
    orangeCount:0,
    isAlive:true,
    grow: function () {
      this.age += 1;
      this.height += 10;
      if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount = Math.floor(Math.random()*100);
      }
      if (this.age > MAX_AGE){
        this.isAlive = false;
      }
    },
    dropOrange: function(){
      return true;
    }
  };
  return tree;
};

function createOrange(){
  var orange = {
    diameter: Math.floor(Math.random()*10)
  };
  return orange;
};
