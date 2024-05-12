// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let rgbString = image[i][j];
      let rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      image[i][j] = rgbArrayToString(rgbNumbers);
    }
  }
}




// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  const backgroundPixel = image[0][0];
  
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundPixel) {
        let rgbString = image[i][j];
        let rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        image[i][j] = rgbArrayToString(rgbNumbers);
      }
    }
  }
}
// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  return Math.min(255, Math.max(0, number));
}

// TODO 3: Create reddify function
function reddify(rgbNumbers) {
  rgbNumbers[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(rgbNumbers) {
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] - 50);
}

function increaseGreenByBlue(rgbNumbers) {
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers[BLUE] + rgbNumbers[GREEN]);
}

// CHALLENGE code goes below here
