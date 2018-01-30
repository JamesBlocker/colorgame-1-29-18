// document.body.style.background = 'green';
// }

// var greenBtn = document.querySelector('#green');
// greenBtn.addEventListener('click', hulk);

function tested() {
    console.log('tested');
}

function randomInt(n){
    return Math.floor(Math.random() * n)
}

//buttons hooked up
var redButton = document.querySelector('#redBtn');
redButton.addEventListener('click', redButtonPress);
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', buttonPress);
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', buttonPress);

var colorArr = ["Red", "Green", "Blue"];
var score = 0;
var strike = 0;
var displayWord = document.querySelector('#main-box')

//game start state
var startNameNum = randomInt(3);
var startBackgroundColorNum = randomInt(3);
var colorNum = randomInt(3);
displayWord.innerText = colorArr[startNameNum];
document.body.children[1].style.background = colorArr[startBackgroundColorNum];
document.body.children[1].style.color = colorArr[colorNum];

//colorChange
function colorChange() {
    var colorNameNum = randomInt(3);
    var backgroundColorNum = randomInt(3);
    var colorNum = randomInt(3);
    displayWord.innerText = colorArr[colorNameNum];
    document.body.children[1].style.background = colorArr[backgroundColorNum];
    document.body.children[1].style.color = colorArr[colorNum];
}

//Game Over State
function gameOver() {
    alert("Game Over! \n\nYou had a score of: " + score);
}

//Score update
function scoreUpdate() {
    document.body.children[0].children[1].innerText = score;
}

//button press
function buttonPress() {
    colorChange();  
}

function redButtonPress() {
    if (displayWord.innerText === "Red") {
        score++;
    } else {
        strike++;
    }

    if (strike >= 3) {
        gameOver()
    }
    scoreUpdate();
    colorChange();
}

