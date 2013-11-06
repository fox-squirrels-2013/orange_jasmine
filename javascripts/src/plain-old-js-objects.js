/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 4;
MAX_AGE = 12;

var createTree = function(){
  var eert = {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function(){
      eert.age += 1;
      eert.height += 10;
      if(eert.age >= FRUIT_BEARING_AGE){
        eert.orangeCount += Math.floor((Math.random()*10)+1);
      }
      if(eert.age > MAX_AGE){
        eert.isAlive = false;
      }
    },
    dropOrange: function(){
      return 'orange';
    },
    createOrange: function(){
      var fruit = {

      };
    }
  };
  return eert;
};
