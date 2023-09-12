$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
    createPlatform(500, 600.05, 200, 20);
    createPlatform(300, 460, 200, 20);
    createPlatform(100, 460, 200, 20);
    createPlatform(100, 100, 20, 200);
    createPlatform(100, 300, 20, 200);
    createPlatform(100, 500, 20, 160);
    createPlatform(300, 215, 100, 20);
    createPlatform(300, 250, 100, 20);
    createPlatform(200, 340, 20, 20);
    createPlatform(280, 130, 40, 200);
    createPlatform(390, 10, 40, 300);
    createPlatform(150, 270, 20, 20);
    createPlatform(250, 180, 20, 20);
    createPlatform(800, 460, 200, 20);
    createPlatform(700, 350, 20, 20);
    createPlatform(850, 240, 20, 20);
    createPlatform(1000, 150, 20, 20);
    createPlatform(1150, 150, 20, 20);
    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createCollectable("database", 300, 174);
    createCollectable("database", 700, 349);
    createCollectable("database", 1000, 149);
    createCollectable("database", 1150, 149);
    createCollectable("database", 850, 239);

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCannon("right", 600, 1750);
    createCannon("right", 400, 4500);
    createCannon("right", 300, 2700);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
