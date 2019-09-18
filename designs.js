// Select color input
// Select size input
var height;
var width;
var color;
// When size is submitted by the user, call makeGrid()

// Storing submit form to a variable for easier use
var input = document.querySelector("#sizePicker");
//Adding listener for form submission
input.addEventListener('submit', function(event) {
  event.preventDefault();
  height = document.querySelector('#inputHeight').value;
  width = document.querySelector('#inputWidth').value;
  makeGrid(height, width);
});

//Store pixelCanvas id to a variable to make it easier to add rows in makeGrid
var grid = document.querySelector('#pixelCanvas');


function makeGrid(input1, input2) {
  grid.innerHTML = "";
  for (var i= 1; i <= input1; i ++) {
    var row = document.createElement('tr');
    grid.appendChild(row);
    for (var x = 1; x <= input2; x++) {
      var col = document.createElement('td');
      row.appendChild(col);
      //adding the abilit to change color of square
      col.addEventListener('click', function() {
        color = document.querySelector('#colorPicker').value;
        event.target.style.backgroundColor = color;
      }, true);
    }
  }
}
