console.log('JS/JQ sourced!');


// click handler for addBlock()
$(document).ready(function(){
  $('.addBlock').on('click', function()){
    console.log('in addBlock on click');
    // append a block to DOM
    var appendString = "<div class='blocky'></div>"
    $('#outputDiv').append(appendString);
    // with a random color
  }

}
