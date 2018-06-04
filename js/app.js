// Enemies our player must avoid
class Enemy {
  constructor(xaxis, yaxis){
    this.sprite = 'images/enemy-bug.png';
    this.x = xaxis;
    this.y = yaxis;
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
const EnemyOne = new Enemy(50, 50);
const EnemyTwo = new Enemy(60, 60);
const EnemyThree = new Enemy(70,70);
const EnemyFour = new Enemy(80,80);
// Place all enemy objects in an array called allEnemies

const allEnemies = [EnemyOne,EnemyTwo,EnemyThree,EnemyFour]
// Place the player object in a variable called player




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
