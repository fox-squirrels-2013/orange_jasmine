// You can access a Button object by searching through the elements[] array of a form, or by using document.getElementById().

// var buttonObject = $('.plant');

// buttonObject.click = function(){
//   alert("hi")
// };
$(document).ready( function(){
  $('.plant').click(function() {
    // alert("HI");
    var DOM_img = document.createElement("img");
    DOM_img.src = "./images/tree.jpeg";
    $('.grove').append(DOM_img);
  });
});
