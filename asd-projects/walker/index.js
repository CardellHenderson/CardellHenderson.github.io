/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  var width = $("#board").width()
  var height = $("#board").height()
  // Game Item Objects
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();


  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    
  if (event.which === KEY.LEFT) {
    walker.speedX = -5;
  }
  if (event.which === KEY.UP) {
    walker.speedY = -5;
  }
  if (event.which === KEY.RIGHT) {
    walker.speedX = 5;
  }
  if (event.which === KEY.DOWN) {
    walker.speedY = 5;
  }
  }
  function handleKeyUp(event) {

    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css({
      "left": walker.x,
      "top": walker.y
    });
  }
  function wallCollision() {
    if (walker.x === $("#board").width()) {
      walker.x -= walker.speedX
    } 
    if (walker.x === 0) {
      walker.x -= walker.speedX
    }
    if (walker.y === $("#board").height()) {
      walker.y -= walker.speedY
    }
    if (walker.y === 0) {
      walker.y -= walker.speedY
    }
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  




}
