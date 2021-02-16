// array destructuring

const numbers = [44, 19, 100, 587, 4];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [44, 5];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 8];
}

const [box1, box2] = boxify(5);
console.log(box1, box2);

// object destructuring
const person = { id: 2, name: 'Rifat', age: 25, money: 2500 };
const { money } = person;
console.log(money);
console.log(money);
console.log(money);

// create object shortcut
const a = 25;
const b = 35;
const obj = { a: a, b: b };
const obj2 = { a, b };
console.log(obj2);

//new array using three dots
numbers.push(56);
const newNumbers = [...numbers, 125];
console.log(newNumbers);