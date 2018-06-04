//Enemy class is constructed below
class Enemy {
  constructor(xaxis, yaxis) {
    this.sprite = 'images/enemy-bug.png';
    this.x = xaxis;
    this.y = yaxis;
    this.width = 70;
    this.height = 70;
    this.speed = (Math.random() * 500);
  }
  //update function is constantly running in engine.js
  update(dt) {
    //set horizontal movement based off of speed
    this.x += (this.speed * dt);
    //check if enemies have reached edge, reset and change speed
    if (this.x >= 500) {
      this.x = -50;
      this.speed = (Math.random() * 500);
    }
  }
  //render function is constantly running in engine.js
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
// Now write your own player class
class Player extends Enemy {
  constructor(xaxis, yaxis) {
    super(xaxis, yaxis);
    this.sprite = 'images/char-boy.png';
  }
  //update function is constantly running in engine.js
  update(dt) {
    //check if player has reached water, reset
    if (this.y <= 20) {
      this.y = 420;
    }
  }
  //handleinput function accepts inputs from eventlistener and adjusts sprite
  handleInput(key) {
    if (key == 'left' && this.x > 0) {
      this.x -= 100;
    } else if (key == 'right' && this.x < 400) {
      this.x += 100;
    } else if (key == 'down' && this.y < 420) {
      this.y += 95;
    } else if (key == 'up') {
      this.y -= 95;
    }
  }
};

//instantiate four enemy creatures and add to array per spec
const enemyOne = new Enemy(-50, 300);
const enemyTwo = new Enemy(-50, 220);
const enemyThree = new Enemy(-50, 140);
const enemyFour = new Enemy(-50, 60);
const allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour]

//instantiate player object
const player = new Player(200, 420);

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
