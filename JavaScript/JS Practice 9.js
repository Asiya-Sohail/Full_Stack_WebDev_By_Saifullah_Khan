// console.log("b" + "a" + + "n" + "a")
// console.log("b" + "a" + + "0" + "a")
// console.log("b" + "a" + + " " + "a")
// console.log("b" + "a" + + "a" + "a")

function hello() {
    console.log("Hello")
}

// hello()

function add(num1, num2) {
    console.log(num1 + num2)
}

// add() If empty so Nan
// add(1, 5)

function circle(radius) {
    let area = 3.14 * radius**2
    // let area = 3.14 * (radius* radius)
    console.log(area)
}

// circle(3)

function rect(w, h) {
    let area = w*h
    // console.log(area)
    return area
}

// rect(4, 6)
// console.log("Rectangle area : " + rect(3,7))

// Arrow Functions 
// Explicit Arrow Functions, Implicit are in next file
const myfunc = (p1, p2) => {
    return p2 + p1
}

// console.log(myfunc(2, 4))

// immediately invoked functions iife
// We need to directly call something in js
// database connection, page reload, animation

// (
//     () => {
//         console.log("coding...")
//     }
// )();

// (
//     (p1, p2) => {
//         console.log(p1+p2);
//     }
// )(3, 5);


// let myfunct = function add(p, e) {
//     return p+e
// }

// ANonymous 
// let myfunct = function (p, e) {
//     return p+e
// }

// Arrow 
let myfunct =  (p, e) => {
    return p+e
}

console.log(myfunct(4,5))

// Higher Order Functions
// Functions which takes another function as a parameter
let mul = (p1, p2) => {
    return p1 * p2;
}
let add = (p1, p2) => {
    return p1 + p2;
}
let sub = (p1, p2) => {
    return p1 - p2;
}

// You have to pass only not call
function HigherOrderFunction(p1, p2, func) {
    func(p1, p2);
}

HigherOrderFunction(1, 3, mul);
HigherOrderFunction(8, 2, add);
HigherOrderFunction(9, 4, sub);
