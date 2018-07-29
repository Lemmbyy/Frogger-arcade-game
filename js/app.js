// Enemies our player must avoid
const Enemy = function(x, y, speed) {
  /********* specify the enemy's at x-axis and y-axis and the speed.*********/
  this.x = x;
  this.y = y;
  this.speed = speed;
  // Image of the enemy
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    this.x += this.speed * dt;
    // which will ensure the game runs at the same speed for
    // all computers.


    /*********When the enemy get out of the screen they reappear again from the start of x-axis****/
    if (this.x > 510){
      this.x = 0;
      this.speed = 100 + Math.floor(Math.random() * 280);
    }

    /******** If the player hits the enemy (Back to the start point) *******/
    if(player.x < this.x + 80 && player.x + 80 > this.x &&
       player.y < this.y + 60 && 60 + player.y > this.y ){

         /***** The start Point *******/
         player.x = 202.5;
         player.y = 405;
       };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


/******* The Player on x-axis and y-axis *********/
const Player = function (x, y){
  this.x = x;
  this.y = y;

  /**** The Image of the Player *****/
  this.player = 'images/char-cat-girl.png';
}


Player.prototype.update = function(dt){

};


// Draw the player on the screen, required method for game
Player.prototype.render = function (){
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};


/***** Function to react with arrow keys   ********/
Player.prototype.handleInput =function (keyPress){

  /***** to react with the left arrow and not to get out of screen ****/
  if (keyPress == 'left' && this.x > 0) {
    this.x -= 101.25;
  }
  /***** to react with the right arrow and not to get out of screen  ******/
  if (keyPress == 'right' && this.x < 405){
    this.x += 101.25;
  }
  /***** to react with the up arrow and not to get out of screen ******/
  if (keyPress == 'up' && this.y > 0){
    this.y -= 83;
  }
  /***** to react with the down arrow and not to get out of screen ******/
  if (keyPress == 'down' && this.y < 405){
    this.y += 83;
  }
  /***** When the player reaches the water (back to the strart point) ******/
  if (this.y <= 0){
    setTimeout (function () {
      player.x = 202.5;
      player.y = 405;
    },600)
  }
}

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


const allEnemies = [];

/*** The Location of enemies on the y-axis ****/
const enemyLocation = [63, 147, 230];

enemyLocation.forEach(function (locationY){
  enemy = new Enemy(0, locationY, Math.floor(Math.random() * 300)+150);
  /**** Add enemy to the empty array **/
  allEnemies.push(enemy);
});

/****** The start point of the player ***/
const player = new Player(202.5, 405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
