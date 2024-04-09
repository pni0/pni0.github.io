/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var BOARD_WIDTH = $("#board").width()
  var BOARD_HEIGHT = $("#board").height()
  var KEY = {
    ENTER : 13,
    DOWN : 40,
    UP : 38,
    RIGHT : 39,
    LEFT : 37
    
  }
  var walker = {
    postitionX : 0,
    postitionY : 0,
    speedX : 0,
    speedY : 0
  }
  // Game Item Objects


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
    repositionGameItem()
    wallCollision()
    redrawGameItem()

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }else if (event.which === KEY.DOWN){
      console.log("down pressed")
      walker.speedY = 5;
    }else if (event.which === KEY.RIGHT){
      console.log("right arrow pressed")
      walker.speedX = 5;
    }else if (event.which === KEY.UP){
      console.log("up pressed")
      walker.speedY = -5;
    }else if (event.which === KEY.LEFT){
      console.log("left pressed")
      walker.speedX = -5;
    }
  }
  function handleKeyUp(event){
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }else if (event.which === KEY.DOWN){
      console.log("down up")
      walker.speedY = 0;
    }else if (event.which === KEY.RIGHT){
      console.log("right arrow up")
      walker.speedX = 0;
    }else if (event.which === KEY.UP){
      console.log("up released")
      walker.speedY = 0;
    }else if (event.which === KEY.LEFT){
      console.log("left up")
      walker.speedX = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
    walker.postitionX += walker.speedX
    walker.postitionY += walker.speedY
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.postitionX);
    $("#walker").css("top", walker.postitionY);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
function wallCollision(){
  if( walker.postitionX  <= 0){
    walker.postitionX = walker.postitionX - walker.speedX
  }else if(walker.postitionX >= $("#board").width()){
    walker.postitionX = walker.postitionX - walker.speedX
  }
  else if(walker.postitionY >= $("#board").height()){
    walker.postitionY = walker.postitionY - walker.speedY 
  }
  else if(walker.postitionY <= 0){
    walker.postitionY = walker.postitionY - walker.speedY
  }
}