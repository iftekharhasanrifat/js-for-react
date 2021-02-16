const money = 150;
const active = true;
let food;
if (money > 100) {
    food = "Biriyani";
} else {
    food = "Anything";
}
// ternary 
// condition? true value : false value;
let food2 = money > 100 ? 'biriyani' : 'anything';
let cssClass;
if (active === true) {
    cssClass = 'active';
} else {
    cssClass = "inactive";
}
const cssClass2 = active ? 'active' : 'inactive';
// function call shortcuts alternative
// active ? displayUser() : hideUser();

//
const m = active && 5;
const n = active || 3;
// console.log(n);
// active && displayUser();
// active || displayUser();

// string to number
const number = +'54';
console.log(number);

// number to string
const numText = 45 + "";
console.log(numText);

// default value
function add(num1, num2 = 5) {
    // num2 = num2 || 5;
    return num1 + num2;
}
add(45, 10);