// Write your Orange Tree code here - you may use constructor functions 
var FRUIT_BEARING_AGE = 3;
var MAX_AGE = 50;

var Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
};

Tree.prototype.grow = function(){
  this.age += 1;
  this.height +=10;
  if (this.age >= FRUIT_BEARING_AGE){
    this.orangeCount = Math.floor(Math.log(this.height));  
  }
  if (this.age > MAX_AGE){
    this.isAlive = false;
  }
};

Tree.prototype.dropOrange = function(){
  return {}
};

Tree.prototype.createOrange = function(){
  return new Orange();
};

var Orange = function(){
  this.diameter = Math.floor(Math.random()*30);
}
