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
redButton.addEventListener('click', tested);
var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', tested);
var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', tested);

var colorArr = ["Red", "Green", "Blue"];

var displayWord = document.querySelector('#main-box')
displayWord.innerText = colorArr[2]

//button press
var colorNum = randomInt(2);
