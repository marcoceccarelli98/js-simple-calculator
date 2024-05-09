'use strict';
//-------------------
//Element Declaration
//-------------------
//Screen
const screen = document.querySelector('.screen-num');

//Number Buttons
// const btn0 = document.getElementById('zero');
// const btn1 = document.getElementById('one');
// const btn2 = document.getElementById('two');
// const btn3 = document.getElementById('three');
// const btn4 = document.getElementById('four');
// const btn5 = document.getElementById('five');
// const btn6 = document.getElementById('six');
// const btn7 = document.getElementById('seven');
// const btn8 = document.getElementById('eight');
// const btn9 = document.getElementById('nine');

//Operation Buttons
// const btnEqual = document.getElementById('equal');
// const btnPlus = document.getElementById('plus');
// const btnMinus = document.getElementById('minus');
// const btnMulti = document.getElementById('multi');
// const btnDivide = document.getElementById('divide');
// const btnCancel = document.getElementById('cancel');

// ----
// MAIN
// ----

let tempNum = 0;
let firstNum = 0;
let tempSign = ''
let tempScreen = '';
let result = 0;

// --- NUMBERS ---

const numbersBtn = document.querySelectorAll('.numbers');

for (let i = 0; i < numbersBtn.length; i++) {
    //add click event listener to all numbers
    numbersBtn[i].addEventListener("click", function () {
        //get number from innerHTML
        tempNum = numbersBtn[i].innerHTML;
        //reset screen
        tempScreen = '';
        //add number to screen
        tempScreen += tempNum;
        screen.innerHTML = tempScreen;
    });
}

// --- SIGNS ---

const signsBtn = document.querySelectorAll('.symbols');

for (let i = 0; i < signsBtn.length; i++) {
    //add click event listener to all signs
    signsBtn[i].addEventListener("click", function () {

        switch (signsBtn[i].id) {
            case 'plus':
                tempSign = 'plus';
                break;
            case 'minus':
                tempSign = 'minus';
                break;
            case 'multi':
                tempSign = 'multi';
                break;
            case 'divide':
                tempSign = 'divide';
                break;
            case 'equal':
                tempSign = 'equal';
                break;
            case 'cancel':
                tempSign = 'cancel';
                break;
        }

        //save previus num to first num
        firstNum = tempNum;

        //reset screen
        tempScreen = '0';
        screen.innerHTML = tempScreen;
    });
}

// --- EQUAL ---

const equalSign = document.getElementById('equal');

//choice the operation to do
equalSign.addEventListener("click", function () {
    switch (tempSign) {
        case 'plus':
            result = sum(firstNum, tempNum);
            break;
        case 'minus':
            result = min(firstNum, tempNum);
            break;
        case 'multi':
            result = mul(firstNum, tempNum);
            break;
        case 'divide':
            result = div(firstNum, tempNum);
            break;
    }

    //print result on screen
    tempScreen = result;
    //set temp num as result to get ready for another count
    tempNum = result;
    screen.innerHTML = tempScreen;
});

// ---------
// FUNCTIONS
// ---------

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
    return Number(num1) / Number(num2);
}