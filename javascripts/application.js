$(document).on('ready', function() {
  // Put the code that starts your app running here.
  var updateFruitcount = function() {
    $('span.fruit-count').text(tree.orangeCount)
  }

  // Listeners
  $('button.plant').on('click', function() {
    $('#orange-tree-template').show()
    tree = new Tree()
  })

  $('button.age').on('click', function() {
    tree.grow()
    $('span.age').text(tree.age)
    updateFruitcount()
  })

  $('button.pick').on('click', function() {
    tree.dropOrange()
    updateFruitcount()
  })
});


