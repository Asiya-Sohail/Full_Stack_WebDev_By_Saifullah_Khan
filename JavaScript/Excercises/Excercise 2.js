// Exercise 2: Play With Variables ✨

/*Task:
Perform the following mathematical operations
on the provided variables a and b

1.	Add
2.	Subtract
3.	Multiply
4.	Divide
5.	Increment
6.	Decrement
7.	Reminder
*/

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add(a, b) {
    return a + b;
}

// Subtract small value from larger one
function subtract(a , b) {
    if (a >= b) {
        return a - b;
    } else {
        return b - a
    }
}

function multiply(a, b) {
    return a * b;
}

// Divide larger value by small
function divide(a , b) {
    if (a >= b) {
        return a / b;
    } else {
        return b / a;
    }
}

// Increase value of a by 1
function increment(a) {
    return ++a;
}

// Decrease value of b by 1
function decrement(a) {
    return --a;
}

// Divide larger value by small to find the reminder
function reminder(a, b) {
    if (a >= b) {
        return a % b;
    } else {
        return b % a;
    }
}

console.log(`Addition : ${add(a, b)}`)
console.log(`Subtraction : ${subtract(a, b)}`)
console.log(`Multiplication : ${multiply(a, b)}`)
console.log(`Division : ${divide(a, b)}`)
console.log(`Increment : ${increment(a)}`)
console.log(`Decrement : ${decrement(a)}`)
console.log(`Reminder : ${reminder(a, b)}`)