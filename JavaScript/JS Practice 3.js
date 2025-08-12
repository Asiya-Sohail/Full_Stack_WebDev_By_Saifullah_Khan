/* JS CLASS 4 */
let bal1 = 120
let bal2 = new Number(155)
console.log(bal1, bal2)
console.log(typeof bal1, typeof bal2)
let isActive = true
let isLoggedIn = new Boolean(false)
console.log(isActive, isLoggedIn)
console.log(typeof isActive, typeof isLoggedIn)
let sal = 100000000n
console.log(sal, typeof sal)
let user = "John"
console.log("Happy Birthday, " +  user + " !")
console.log(`My age is ${12+7}`)

let name1;
let name2 = null;
// 0 is not null
// typeof null = object
console.log(name1, name2, typeof name1, typeof name2)

// Symbols in JS, MDN
//  Symbols are often used to add unique property keys to an object that won't collide with keys 
// any other code might add to the object

//  Every Symbol.for("key") call will always return the same Symbol for a given value of "key"
let sm1 = Symbol("b")
let sm2 = Symbol("b")
console.log(sm1 == sm2, sm1, sm2, typeof sm1, typeof sm2)