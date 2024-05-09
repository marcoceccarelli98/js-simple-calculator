'use strict';
//-------------------
//Element Declaration
//-------------------

//Screen
const screen = document.querySelector('.screen-num');
const numbersBtn = document.querySelectorAll('.numbers');
const signsBtn = document.querySelectorAll('.symbols');
const equalSign = document.getElementById('equal');
const cancelButton = document.getElementById('cancel');


// ----
// MAIN
// ----

let tempNum = '';
let fullNum = '';
let tempSign = '';
let memFirstNum = 0;
let result = 0;

// --- NUMBERS ---

for (let i = 0; i < numbersBtn.length; i++) {
    //add click event listener to all numbers
    numbersBtn[i].addEventListener("click", function () {
        //get number from innerHTML
        tempNum = numbersBtn[i].innerHTML;
        //concatenate number to get multiple digit numbers
        fullNum += tempNum;
        //add number to screen
        screen.innerHTML = fullNum;
    });
}

// --- SIGNS ---

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
        }

        //save previus num to first num
        memFirstNum = fullNum;
        //reset temp number
        fullNum = '';
        //reset screen
        screen.innerHTML = '';
    });
}

// --- EQUAL ---

//choice the operation to do
equalSign.addEventListener("click", function () {
    switch (tempSign) {
        case 'plus':
            result = sum(memFirstNum, fullNum);
            break;
        case 'minus':
            result = min(memFirstNum, fullNum);
            break;
        case 'multi':
            result = mul(memFirstNum, fullNum);
            break;
        case 'divide':
            result = div(memFirstNum, fullNum);
            break;
    }

    //check if user trying to divide a number by 0
    if (fullNum == 0 && tempSign == 'divide') {
        screen.innerHTML = 'Err';
    } else {
        //print result on screen
        screen.innerHTML = result;
    }
    //reset sign
    tempSign = '';
    //set temp num as result to get ready for another count
    fullNum = result;
});

// --- CANCEL ---

cancelButton.addEventListener("click", function () {
    tempSign = '';
    tempNum = '';
    fullNum = '';
    memFirstNum = 0;
    result = 0;
    screen.innerHTML = '';
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
    return Math.round(Number(num1) / Number(num2) * 1000) / 1000;
}