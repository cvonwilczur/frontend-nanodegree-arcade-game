class Enemy {
  constructor(xaxis, yaxis){
    this.sprite = 'images/enemy-bug.png';
    this.x = xaxis;
    this.y = yaxis;
    this.speed = 10;
  }
  update(dt) {
    this.x += (this.speed*dt);
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  }
}
// Now write your own player class
class Player extends Enemy{
  constructor(xaxis,yaxis){
    super(xaxis,yaxis);
    this.sprite = 'images/char-boy.png';
  }
  update(dt){
  }
  handleInput(key) {
    if (key == 'left'){
        this.x -= 100;
    } else if(key == 'right'){
        this.x += 100;
    } else if(key == 'down'){
        this.y += 100;
    } else if(key == 'up'){
       this.y -= 100;
    }
  };
}

const enemyOne = new Enemy(-50, 300);
const enemyTwo = new Enemy(-50, 220);
const enemyThree = new Enemy(-50,140);
const enemyFour = new Enemy(-50,60);
const playerOne = new Player(200,420);

const allEnemies = [enemyOne,enemyTwo,enemyThree,enemyFour]

const player = playerOne;

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
