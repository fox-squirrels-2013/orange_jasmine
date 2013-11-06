// Write your Orange Tree code here - you may use constructor functions
FRUIT_BEARING_AGE = 4;
MAX_AGE = 12;

function Tree(){
  this.age = 0;
  this.height = 0;
  this.orangeCount =0;
  this.isAlive = true;
  this.grow = function(){
    this.age += 1;
    this.height += 10;
    if(this.age >= FRUIT_BEARING_AGE){
      this.orangeCount += randomInt(10);
    }
    if(this.age > MAX_AGE){
      this.isAlive = false;
    }
  };
  this.dropOrange = function(){
    orange = new Orange();
    return orange;
  };
}

var randomInt = function(ceiling){
  return Math.floor((Math.random()*ceiling)+1);
};

function Orange(){
  this.diameter = randomInt(5);
}
