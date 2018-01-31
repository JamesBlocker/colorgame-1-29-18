//buttons hooked up
var redButton = $('#redBtn');
redButton.on('click', redButtonPress);
var blueButton = $('#blueBtn');
blueButton.on('click', blueButtonPress);
var greenButton = $('#greenBtn');
greenButton.on('click', greenButtonPress);
var againButton = $('#again');

//keys pressed
window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(evt) {
    if (evt.keyCode == "65") {
        redButtonPress();
    } else if (evt.keyCode == "83") {
        blueButtonPress();
    } else if (evt.keyCode == "68") {
        greenButtonPress();
    } else if (evt.keyCode == "13") {
        refreshIt();
    }
}

//establish numbers
function randomInt(n){
    return Math.floor(Math.random() * n)
}

//game start state
var colorArr = ["Red", "Green", "Blue"];
var score = 0;
var strike = 3;
var displayWord = document.querySelector('#main-box');
var gameScreen = document.querySelector('#game');
var end = document.querySelector('#end');
var startNameNum = randomInt(3);
var startBackgroundColorNum = randomInt(3);
var colorNum = randomInt(3);
var bodyColorNum = randomInt(3);
displayWord.innerText = colorArr[startNameNum];
document.body.children[0].children[2].style.background = colorArr[startBackgroundColorNum];
document.body.children[0].children[2].style.color = colorArr[colorNum];
document.body.style.background = colorArr[bodyColorNum];
scoreUpdate();

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

//Game Over State
function refreshIt() {
    window.location.reload()
}

function gameOver() {
    //alert("Game Over! \n\nYou had a score of: " + score);
    if (score === 1) {
    document.body.children[1].children[1].innerText = "You scored " + score + " point!"   
    } else {
    document.body.children[1].children[1].innerText = "You scored " + score + " points!"
    }
    $("#game").hide();
    $("#end").show();
    againButton.on('click', refreshIt);
}

//Score update
function scoreUpdate() {
    document.body.children[0].children[0].children[1].innerText = score;
    document.body.children[0].children[1].children[1].innerText = strike;
}

//button presses and assesment
function redButtonPress() {
    if (displayWord.innerText === "Red") {
        score++;
    } else {
        strike--;
    }
    scoreUpdate();
    if (strike === 0) {
       gameOver();
    } 
    colorChange();
}

function blueButtonPress() {
    if (displayWord.innerText === "Blue") {
        score++;
    } else {
        strike--;
    }
    scoreUpdate();
    if (strike === 0) {
        gameOver()
    }
    colorChange();
}

function greenButtonPress() {
    if (displayWord.innerText === "Green") {
        score++;
    } else {
        strike--;
    }
    scoreUpdate();
    if (strike === 0) {
        gameOver()
    }
    colorChange();
}

