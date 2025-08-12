let name = (name) => {
    return `Happy Birthday ${name}`;
}

console.log(name("Hiba"))

// Implicit Function
let myfunc = (p1, p2) => p1 + p2;
console.log(myfunc(2, 7));

function my(p1, p2 = 4) {
    return p1 + p2;
}

console.log(my(2))
console.log(my(8, 7))

function n2() {
    console.log(this)
}

n2()

// Higher order function are two types
// 1. return functions, 2.  take functions in parameters

function outerfunc() {
    return function innerfunc() {
        return "John"
    }
}

let myfunction = outerfunc()
console.log(myfunction())

