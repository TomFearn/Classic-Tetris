const grid = document.querySelector('#gameBoard');
for (let i = 0; i < 200; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

//Variables
























































































//Functions

document.addEventListener('DOMContentLoaded', function(){
    //event listener for start button. runGame called upn click
    document.getElementById('resetButton').addEventListener('click', function() {
        //setup board function called
        setupBoard();
        spawnBlock();
        runGame();
    });
})
    
/**

 * Clears the board and resets the game.

 */
function setupBoard() {
    //clears the board and resets the game
    const gameBoard = Array.from({ length: 20 }, () => Array(10).fill(0));
    console.table(gameBoard);
    // set position to top of the grid
    playerX = 0;
    playerY = 0;
}

function restart() {
    //call setupBoard and runGame
    setupBoard();
    spawnBlock();
    runGame();
    toggleGameOverMessage();
}


let timer = 300;
const multiplier = 0.96;
    
/**
 * Decrease the timer by 4%. Time is rounded to the nearest whole number.
 * Time is in milliseconds.
 */
function decreaseTimer() {
    timer = (timer * multiplier).toFixed(0);
    //console.log(timer); for tesitng purposes
}










































































































































































































































/** 
 * Randomly generates the new block from pre-defined blocks 
 * */
spawnBlock()


moveDown()
    //called every tick

moveLeft()


moveRight()


checkCollison()


stopBlock()


checkGameOver() 


function endGame() {
    return false;
}









































































































































































































































































































































displayScore()


checkHighScore()


checkFilledRow()


clearRow()


updateScore()

//could have

rotateBlock()











































































































































































































































































/**
 * Toggles the game over message on and off.
 */
function toggleGameOverMessage() {
    //game over message
    let gameOver = document.getElementById('gameOverMessage');
    if (gameOver.classList.contains('gamever-off')) {
        gameOver.classList.add('gameover-on');
        gameOver.classList.remove('gameover-off');
    } else {
        gameOver.classList.add('gameover-off');
        gameOver.classList.remove('gameover-on');
    }
}






//Gameloop

/**
 * The main game loop function. Uses a setTimeout to call itself every tick.
 */
function runGame() {
    if (run === true) {

        moveDown();
        
        if (checkCollison()) {
            stopBlock();
            checkFilledRow(); // all the flled rows and board would be adjusted here
            if (checkGameOver()) {
                run = endGame();
            } else {
                spawnBlock();
                setTimeout(runGame, timer);
            }
        } else {
            setTimeout(runGame, timer);
        }
    } else if (run === false) {
        toggleGameOverMessage();
    }
}
