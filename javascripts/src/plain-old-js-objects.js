/* Write your code for the plain-old-js-objects-spec here */

  //

  var createTree = function() {
    aTreeObject = {
      age: 0,
      height: 0,
      orangeCount: 0,
      isAlive: true,
      dropOrange: function() {
        return 0
      },
      grow: function() {
        this.age += 1
        this.height += 10
        if (this.age >= FRUIT_BEARING_AGE)  {
          this.orangeCount += Math.floor((Math.random()*3)+1);
        }
        if (this.age > MAX_AGE) {
          this.isAlive = false
        }
      }
    }

    return aTreeObject
  }

  FRUIT_BEARING_AGE = 5
  MAX_AGE = 10

  var createOrange = function() {
    var anOrange = {
      diameter: Math.floor((Math.random()*2)+3)
    }
    return anOrange
  }
