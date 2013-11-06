/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 4;
MAX_AGE = 12;

var createTree = function(){
  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function(){
      tree.age += 1;
      tree.height += 10;
      tree.bearFruit();
      tree.dieEventually();
    },
    dropOrange: function(){
      return createOrange();
    },
    bearFruit: function(){
      if(tree.age >= FRUIT_BEARING_AGE){ tree.orangeCount += randomInt(10); }
    },
    dieEventually: function(){
      if(tree.age > MAX_AGE) { tree.isAlive = false; }
    }
  };
  return tree;
};

var createOrange = function(){
  var fruit = {
    diameter: randomInt(5)
  };
  return fruit;
};

var randomInt = function(ceiling){
  return Math.floor((Math.random()*ceiling)+1);
};
