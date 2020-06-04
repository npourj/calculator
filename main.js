//Calculator
//Nick Pourjalilvand

let screenDisplay = "";
let num1 = "";
let num2 = "";
let selectedOperator = "";
const maxLength = 13;
let numLength = screenDisplay.length;

//Selectors
const screen = document.querySelector('#screen');
const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equalsbtn = document.querySelector('#equalsbtn');
const clearbtn = document.querySelector('#clearbtn');

screen.textContent = screenDisplay;

numButtons.forEach(button => {
    button.addEventListener('click', clickedNumButton)
});

operatorButtons.forEach(button => {
    button.addEventListener('click', clickedOperatorButton)
});

equalsbtn.addEventListener('click', calculate);
clearbtn.addEventListener('click', clearScreen);

function clickedNumButton() {
    if (numLength < maxLength) {
        
        switch (this.textContent) {
            case "0":
                screenDisplay = screenDisplay.concat("0");
                break;
            case "1":
                screenDisplay = screenDisplay.concat("1");
                break;
            case "2":
                screenDisplay = screenDisplay.concat("2");
                break;
            case "3":
                screenDisplay = screenDisplay.concat("3");
                break;
            case "4":
                screenDisplay = screenDisplay.concat("4");
                break;
            case "5":
                screenDisplay = screenDisplay.concat("5");
                break;
            case "6":
                screenDisplay = screenDisplay.concat("6");
                break;
            case "7":
                screenDisplay = screenDisplay.concat("7");
                break;
            case "8":
                screenDisplay = screenDisplay.concat("8");
                break;
            case "9":
                screenDisplay = screenDisplay.concat("9");
                break;
            case ".":
                screenDisplay = screenDisplay.concat(".");
                break;
            default:
                break;
        }
    
        screen.textContent = screenDisplay;
        numLength++;

    }
    else {
        console.log("Number too big");
    }
}

function clickedOperatorButton() {

    if (selectedOperator === "")
    {
        num1 = screenDisplay;
        screenDisplay = "";
        console.log(num1);
        screen.textContent = screenDisplay;
        numLength = 0;

        switch (this.textContent) {
            case "+":
                selectedOperator = "add";
                break;
            case "-":
                selectedOperator = "subtract";
                break;
            case "x":
                selectedOperator = "multiply";
                break;
            case "/":
                selectedOperator = "divide";
                break;
            default:
                break;
        }
    }
    else {
        calculate();
    }

    

}

function calculate() {
    if (num2 === "") {
        num2 = screenDisplay;
    }

    switch (selectedOperator) {
        case "add":
            screenDisplay = (parseFloat(num1, 10) + parseFloat(num2, 10)).toString(10);
            break;
        case "subtract":
            screenDisplay = (parseFloat(num1, 10) - parseFloat(num2, 10)).toString(10);
            break;
        case "multiply":
            screenDisplay = (parseFloat(num1, 10) * parseFloat(num2, 10)).toString(10);
            break;
        case "divide":
            screenDisplay = (parseFloat(num1, 10) / parseFloat(num2, 10)).toString(10);
            break;
        default:
            break;
    }

    console.log(`Answer is ${screenDisplay}!`);
    screen.textContent = screenDisplay;
    numLength = 0;
    num1 = "";
    num2 = "";
    selectedOperator = "";
    
}

function clearScreen() {
    screenDisplay = "";
    num1 = "";
    num2 = "";
    selectedOperator = "";
    numLength = 0;
    screen.textContent = screenDisplay;
}