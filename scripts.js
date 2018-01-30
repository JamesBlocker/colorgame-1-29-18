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
blueButton.addEventListener('click', blueButtonPress);
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', greenButtonPress);
var againButton = document.querySelector('#again');


var colorArr = ["Red", "Green", "Blue"];
var score = 0;
var strike = 0;
var displayWord = document.querySelector('#main-box');
var gameScreen = document.querySelector('#game');
var end = document.querySelector('#end');

//game start state
var startNameNum = randomInt(3);
var startBackgroundColorNum = randomInt(3);
var colorNum = randomInt(3);
var bodyColorNum = randomInt(3);
displayWord.innerText = colorArr[startNameNum];
document.body.children[0].children[2].style.background = colorArr[startBackgroundColorNum];
document.body.children[0].children[2].style.color = colorArr[colorNum];
document.body.style.background = colorArr[bodyColorNum];

//colorChange
function colorChange() {
    var colorNameNum = randomInt(3);
    var backgroundColorNum = randomInt(3);
    var colorNum = randomInt(3);
    var bodyColorNum = randomInt(3);
    displayWord.innerText = colorArr[colorNameNum];
    document.body.children[0].children[2].style.background = colorArr[backgroundColorNum];
    document.body.children[0].children[2].style.color = colorArr[colorNum];
    document.body.style.background = colorArr[bodyColorNum];
}

function refreshIt() {
    window.location.reload()
}
//Game Over State
function gameOver() {
    //alert("Game Over! \n\nYou had a score of: " + score);
    $("#game").hide();
    $("#end").show();
    againButton.addEventListener('click', refreshIt);
}

//Score update
function scoreUpdate() {
    document.body.children[0].children[0].children[1].innerText = score;
    document.body.children[0].children[1].children[1].innerText = strike;
}

//button presses
function buttonPress() {
    colorChange();  
}

function redButtonPress() {
    if (displayWord.innerText === "Red") {
        score++;
    } else {
        strike++;
    }
    scoreUpdate();
    if (strike >= 3) {
       gameOver();
    } 
    colorChange();
}

function blueButtonPress() {
    if (displayWord.innerText === "Blue") {
        score++;
    } else {
        strike++;
    }
    scoreUpdate();
    if (strike >= 3) {
        gameOver()
    }
    colorChange();
}

function greenButtonPress() {
    if (displayWord.innerText === "Green") {
        score++;
    } else {
        strike++;
    }
    scoreUpdate();
    if (strike >= 3) {
        gameOver()
    }
    colorChange();
}

