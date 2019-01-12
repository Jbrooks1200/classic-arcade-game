// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < 505) {
        this.x += this.speed * dt;
        } else {
            this.x = 0;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//Hero class
class Hero {
    constructor() {
        this.x = 201.5;
        this.y = 402;
        this.sprite = 'images/char-boy.png';
        this.isIncremented = false;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    //reset (){
        //this.x = 201.5;
        //this.y = 402;
    }

    handleInput(keyPress) {
        switch(keyPress) {
            case 'left': 
                if(this.x > 50) {
                    this.x -= 101;
                }
            break;
            case 'right': 
                if(this.x < 400) {
                    this.x += 101;
                }
            break;
            case 'up': 
                if(this.y > 65) {
                    this.y -= 83;
                } else {
                    this.x = 201.5;
                    this.y = 400;
                }   
            break;
            case 'down': 
                if(this.y < 400) {
                    this.y += 83;
                }    
            break;
        }
    }

    update() {
        for(Enemy of allEnemies){
            if(this.x < enemy.x + 80) && ((this.x + 80) > enemy.x) && (this.y < (enemy.y + 20)) &&
                ((this.y + 20) > enemy.y)) {
                this.x = 201.5;
                this.y = 402;
                //this.reset();
            }
        }
    }
    
    increment() {
        if((this.y <= 65) && (!isIncremented)) {
            winCounter();
            winStats();
            isIncremented = true;
        }
    }
}

let isIncremented = false;
let wins;
function winCounter() {
    wins = 0;
    wins++
    winCounter.innerHTML = wins;
}

function winStats() {
    document.getElementById("winCount").innerHTML = wins
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const bug = new Enemy(-10, 70, 60);
const bug2 = new Enemy(-13, 153, 150);
const bug3 = new Enemy(-21, 236, 201);
const allEnemies = [];
allEnemies.push(bug, bug2, bug3);
// Init allEnemies array
// For each emeny create and push new Enemy into above array

// Place the player object in a variable called player
// New Hero Object
const player = new Hero();



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
