'use strict';
//-------------------
//Element Declaration
//-------------------

//Screen
const screen = document.querySelector('.screen-num');

//Pads
const numPad = document.querySelector('.col-numpad');
const signPad = document.querySelector('.col-signpad');

//Buttons
const numbersBtn = document.querySelectorAll('.numbers');
const signsBtn = document.querySelectorAll('.symbols');
const equalSign = document.getElementById('equal');
const cancelButton = document.getElementById('cancel');


// ----
// MAIN
// ----

let tempNum = '';
let tempFullNum = '';
let fullNum = '';
let tempSign = '';
let memFirstNum = 0;
let result = 0;

// --- NUMBERS ---

numPad.addEventListener('click', addNumbers);

// --- SIGNS ---

signPad.addEventListener('click', addSign);

// --- EQUAL ---

equalSign.addEventListener("click", function () {

    //do some operations
    result = doMath(memFirstNum, fullNum, tempSign);
    //check if user is trying to divide a number by 0
    checkDivZero();

    //reset sign
    tempSign = '';
    //set temp num as result to get ready for another count
    fullNum = result;
});

// --- CANCEL ---

cancelButton.addEventListener("click", reset);

// --------
// END MAIN
// --------

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// ---------
// FUNCTIONS
// ---------

function addNumbers(e) {
    if (e.target.classList.contains('numbers')) {
        //get number from innerText
        tempNum = e.target.innerText;
        //concatenate number to get multiple digit numbers
        fullNum += tempNum;
    }

    fullNum = removeInitialZero(fullNum);

    //add number to screen
    screen.innerText = fullNum;
}

function addSign(e) {
    if (e.target.classList.contains('symbols')) {
        //assign to temp sign the data-sign
        tempSign = e.target.dataset.sign;
        //memorize first number
        memFirstNum = fullNum;
        //reset temp number
        fullNum = '';
        //reset screen
        screen.innerText = '';
    }
}

function doMath(num1, num2, sign) {
    switch (sign) {
        case '+':
            return sum(num1, num2);
        case '-':
            return min(num1, num2);
        case '*':
            return mul(num1, num2);
        case '/':
            return div(num1, num2);
    }
}

function reset() {
    tempSign = '';
    tempNum = '';
    fullNum = '';
    memFirstNum = 0;
    result = 0;
    screen.innerText = '';
}


function removeInitialZero(string) {
    // Check if string is empty or doesn't start with 0
    if (string[0] === '0') {
        string = (string.substring(1, string.length));
    }
    return string;
}

// OPERATION
function checkDivZero() {
    //check if user trying to divide a number by 0
    if (fullNum == 0 && tempSign == '/') {
        screen.innerText = 'Err';
    } else {
        //print result on screen
        screen.innerText = result;
    }
}

function sum(num1, num2) {
    return Number(num1) + Number(num2);
}

function min(num1, num2) {
    return Number(num1) - Number(num2);
}

function mul(num1, num2) {
    return Number(num1) * Number(num2);
}

function div(num1, num2) {
    return Math.round(Number(num1) / Number(num2) * 1000) / 1000;
}