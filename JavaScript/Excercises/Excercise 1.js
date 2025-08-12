/*Exercise 1: Play With Types ✨
Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return 
"Not a number".*/

function stringToNumber(input) {
    const number = Number(input)
    if (isNaN(number)) {
        console.log("Not a number")
    } else {
        console.log(`Number is : ${number}`)
    }
}

// stringToNumber("1234.78")
 
/*Task 2: ✨
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. 
For example, true becomes false, 0 becomes true, etc. */

function flipBoolean(input) {
    bool = Boolean(input)
    if (bool == true) {
        bool = false
    } else if (bool == false) {
        bool = true
    } else {
        bool = "Not a bool"
    }

    console.log(`Converted Bool of ${input} : ${bool}`)
}

// flipBoolean("hello")
// flipBoolean(2.578)
// flipBoolean(undefined)
// flipBoolean(NaN)
// flipBoolean(null)
// flipBoolean(0)
// flipBoolean("")


/*Task 3: ✨
Write a function whatAmI that takes an input and returns a string describing its type after conversion. 
If it's a number, return "I'm a number!", if it's a string, return "I'm a string!" */

function whatAmI(input) {
    ans = typeof input
    return `I am a ${ans}`
}
// console.log(whatAmI(123))
// console.log(whatAmI("Hello"))
// console.log(whatAmI(true))


/*Task 4: ✨
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or 
"It's falsey!" if it's falsey. */

function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
}

console.log(isItTruthy(1));             // It's truthy!
console.log(isItTruthy(0));             // It's falsey!
console.log(isItTruthy("hello"));       // It's truthy!
console.log(isItTruthy(""));            // It's falsey!
console.log(isItTruthy(null));          // It's falsey!
console.log(isItTruthy(undefined));     // It's falsey!
