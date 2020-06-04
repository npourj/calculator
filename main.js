//Calculator
//Nick Pourjalilvand

let num = "123456789012345";

//Selectors
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
const clearbtn = document.querySelector('#clearbtn');

screen.textContent = num;

buttons.forEach(button => {
    button.addEventListener('click', clickedButton)
});

clearbtn.addEventListener('click', clearScreen);

function clickedButton() {
    if (this.textContent === '7') {
        console.log("Clicked 7");
    }
}

function clearScreen() {
    num = "0";
    screen.textContent = num;
}