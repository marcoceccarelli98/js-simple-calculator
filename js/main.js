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

// --- NUMBERS ---

const numbersBtn = document.querySelectorAll('.numbers');

let tempNum = 0;
let tempFirstNum = 0;
let tempSign = ''
let tempScreen = '';

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


// ---------
// FUNCTIONS
// ---------