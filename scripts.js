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
redButton.addEventListener('click', buttonPress);
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', buttonPress);
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', buttonPress);

var colorArr = ["Red", "Green", "Blue"];

var displayWord = document.querySelector('#main-box')

//game start state
var startColorNum = randomInt(3);
var startBackgroundColorNum = randomInt(3);
displayWord.innerText = colorArr[startColorNum]
document.body.children[1].style.background = colorArr[startBackgroundColorNum]

//button press
function buttonPress() {
    var colorNum = randomInt(3);
    var backgroundColorNum = randomInt(3);
    displayWord.innerText = colorArr[colorNum]
    document.body.children[1].style.background = colorArr[backgroundColorNum]
}

