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
class Player extends Enemy{
  constructor(xaxis,yaxis){
    super(xaxis,yaxis);
    this.sprite = 'images/char-boy.png';
  }
  // this.update();
  //
  // this.render();
  handleInput(key) {
    if (key == 'left'){
        this.xaxis += 50;
        console.log('Left!');
        console.log(this.xaxis);
    } else if(key == 'right'){
        this.xaxis -= 50;
        console.log('Right!');
    } else if(key == 'down'){
      this.yaxis -= 50;
        console.log('Down!');
    } else if(key == 'up'){
      this.yaxis += 50;
      console.log('Up!');
    }
  };
}
// Now instantiate your objects.
const enemyOne = new Enemy(50, 50);
const enemyTwo = new Enemy(60, 60);
const enemyThree = new Enemy(70,70);
const enemyFour = new Enemy(80,80);
const playerOne = new Player(100,100);
// Place all enemy objects in an array called allEnemies

const allEnemies = [enemyOne,enemyTwo,enemyThree,enemyFour]
// Place the player object in a variable called player

const player = playerOne;


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
