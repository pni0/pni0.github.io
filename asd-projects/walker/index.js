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
    ENTER : 13,
    DOWN : 40,
    UP : 38,
    RIGHT : 39,
    LEFT : 37
    
  }
  var walker = {
    x : 0,
    y : 0,
    speedx : 0,
    speedy : 0
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
      walker.speedy = 5;
    }else if (event.which === KEY.RIGHT){
      console.log("right arrow pressed")
      walker.speedx = 5;
    }else if (event.which === KEY.UP){
      console.log("up pressed")
      walker.speedy = -5;
    }else if (event.which === KEY.LEFT){
      console.log("left pressed")
      walker.speedx = -5;
    }
  }
  function handleKeyUp(event){
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }else if (event.which === KEY.DOWN){
      console.log("down up")
      walker.speedy = 0;
    }else if (event.which === KEY.RIGHT){
      console.log("right arrow up")
      walker.speedx = 0;
    }else if (event.which === KEY.UP){
      console.log("up released")
      walker.speedy = 0;
    }else if (event.which === KEY.LEFT){
      console.log("left up")
      walker.speedx = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
    walker.x += walker.speedx
    walker.y += walker.speedy
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
function wallCollision(){
  if( walker.x  < 0){
    walker.x = walker.x - walker.speedx
  }else if(walker.x > $("#board").width()){
    walker.x = walker.x - walker.speedx
  }
  else if(walker.y > $("#board").height()){
    walker.y = walker.y - walker.speedy 
  }
  else if(walker.y < 0){
    walker.y = walker.y - walker.speedy
  }
}