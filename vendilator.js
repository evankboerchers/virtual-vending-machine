/**
 * coin constants
 */
const NICKEL = 0.05;
const DIME = 0.1;
const QUARTER = 0.25;
const LOONIE = 1.0;

/**
 * button constants
 */
const A = 'A';
const B = 'B';
const C = 'C';
const ONE = '1';
const TWO = '2';
const THREE = '3';
const FOUR = '4';
const FIVE = '5';

/**
 * item price constants
 */
const A_ITEM = 0.5;
const B_ITEM = 0.75;
const C_ITEM = 1.0;

/**
 * variables
 */
let moneyInserted = 0.0;
let itemCode = '';

/**
 * printing windows
 */
const outputWindow_div = document.getElementById('output-window');
const moneyWindow_div = document.getElementById('money-window');
const codeWindow_div = document.getElementById('code-window');

/**
 * code buttons
 */
const a_button = document.getElementById('letter-a');
const b_button = document.getElementById('letter-b');
const c_button = document.getElementById('letter-c');
const one_button = document.getElementById('number-1');
const two_button = document.getElementById('number-2');
const three_button = document.getElementById('number-3');
const four_button = document.getElementById('number-4');
const five_button = document.getElementById('number-5');
const purchase_button = document.getElementById('purchase');
const clear_button = document.getElementById('clear');

/**
 * money buttons
 */
const nickel_button = document.getElementById('money-0.05');
const dime_button = document.getElementById('money-0.10');
const quarter_button = document.getElementById('money-0.25');
const loonie_button = document.getElementById('money-1.00');
const return_button = document.getElementById('return');

/**
 * money button action listeners
 */
nickel_button.addEventListener('click', function () {
  console.log('nickel inserted');
  addMoney(NICKEL);
});

dime_button.addEventListener('click', function () {
  console.log('dime inserted');
  addMoney(DIME);
});

quarter_button.addEventListener('click', function () {
  console.log('quarter inserted');
  addMoney(QUARTER);
});

loonie_button.addEventListener('click', function () {
  console.log('loonie inserted');
  addMoney(LOONIE);
});

/**
 * code button action listeners
 */
a_button.addEventListener('click', function () {
  console.log(A + ' pressed');
  addToItemCode(A);
});

b_button.addEventListener('click', function () {
  console.log(B + ' pressed');
  addToItemCode(B);
});

c_button.addEventListener('click', function () {
  console.log(C + ' pressed');
  addToItemCode(C);
});

one_button.addEventListener('click', function () {
  console.log(ONE + ' pressed');
  addToItemCode(ONE);
});

two_button.addEventListener('click', function () {
  console.log(TWO + ' pressed');
  addToItemCode(TWO);
});

three_button.addEventListener('click', function () {
  console.log(THREE + ' pressed');
  addToItemCode(THREE);
});

four_button.addEventListener('click', function () {
  console.log(FOUR + ' pressed');
  addToItemCode(FOUR);
});

five_button.addEventListener('click', function () {
  console.log(FIVE + ' pressed');
  addToItemCode(FIVE);
});

purchase_button.addEventListener('click', function () {
  console.log('purchase pressed');
  printOutput('Item ' + itemCode + '<br/> insert');
});

clear_button.addEventListener('click', function () {
  console.log('clear pressed');
  itemCode = '';
  printItemCode();
});

/**
 * adds inserted money to total
 */
function addMoney(value) {
  moneyInserted = moneyInserted + value;
  console.log('total money inserted: ' + moneyInserted);
  printMoneyInserted();
}

/**
 * adds character to item code if it is valid in the sequence
 * @param {the charachter to be added} char
 */
function addToItemCode(char) {
  if (itemCode.length < 2) {
    if (itemCode.length < 1 && isLetter(char)) {
      itemCode = itemCode + char;
    }
    if (itemCode.length == 1 && !isLetter(char)) {
      itemCode = itemCode + char;
    }
  }
  console.log('current item code ' + itemCode);
  printItemCode();
}
/**
 * checks if a character is a letter
 * @param {characteer to be checked} char
 * @returns true if character is a letter
 */
function isLetter(char) {
  return char.match(/[a-z]/i);
}

/**
 * Prints the value of inserted money to the money window
 */
function printMoneyInserted() {
  moneyWindow_div.innerHTML = '$ ' + moneyInserted;
}

/**
 * prints message to output window
 * @param {message to be printed} message
 */
function printOutput(message) {
  outputWindow_div = message;
}

/**
 * Prints the current item code to item code window
 */
function printItemCode() {
  codeWindow_div.innerHTML = itemCode;
}
