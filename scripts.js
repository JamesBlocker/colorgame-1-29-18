// document.body.style.background = 'green';
// }

// var greenBtn = document.querySelector('#green');
// greenBtn.addEventListener('click', hulk);

function tested() {
    console.log('tested');
}

var redButton = document.querySelector('#redBtn');
redButton.addEventListener('click', tested);

var blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', tested);

var greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', tested);
