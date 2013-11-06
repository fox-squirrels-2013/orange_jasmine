// /* Write your code for the plain-old-js-objects-spec here 

// xit("should be alive when age <= MAX_AGE",function() {
//       var tree=createTree();
//       while (tree.age < (MAX_AGE-1)) {
//         tree.grow();
//       }
//       tree.grow();
//       expect(tree.isAlive).toEqual(true);
//     });

FRUIT_BEARING_AGE = 5
MAX_AGE = 10

function createTree(){
  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function(){
      this.age += 1
      this.height += 10
     if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount += Math.floor((Math.random()*10)+1);
      }
      if (this.age > MAX_AGE) { 
        this.isAlive = false
       
      } 
    }
  }
  return tree
};

var myTree = createTree()




