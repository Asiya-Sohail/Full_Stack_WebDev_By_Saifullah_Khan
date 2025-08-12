/* JS CLASS 5 */
let user = {
    firstname : "John",
    lastname : "Elia",
    age : 22
}

console.log(user)
// user[0] gives undefined
console.log(user.firstname, user["firstname"])

const user2 = {
    firstname : "John",
    lastname : "Elia",
    age : 22
}
console.log(user2)
user2.age = 33
console.log(user2)

let today = new Date()
console.log(today)

// user2 = user (Not allowed because constant)
let user3 = user
console.log(user3,user)
user3.age = 90
console.log(user3,user)

// Array
// () can't be in this array
let arr = ["saif", 33, true, {}, []]
console.log(arr , typeof arr)

// Weird JS
// string has highest priority
// Number is greater than boolean
// typeof 1+1 (number1)
//typeof typeof 1 is string 
console.log(1+1, typeof (1+1), typeof 1+1, typeof typeof 1)
console.log(1+"1", typeof (1+ "1"))
console.log(1+true, typeof (1+ true))
console.log(1+false, typeof (1+ false))
console.log(1+null, typeof (1+ null))
console.log(typeof null);
// Null is an object but when we add it with number it takes 0

// Nan is (not a number)
console.log(Boolean("2abc"))
console.log(Boolean(""), Boolean("0"), Boolean(1), Boolean(0), Boolean("1"), Boolean(null), Boolean(undefined))

console.log("1" - 1, "5" - 1, "5" * 2, "Saif" * 2, 1 + undefined, typeof (1+undefined))
console.log(1 - "1", 5 - "1", "2" * 5, "2" * "Saif", undefined + 1, typeof (undefined + 1))
console.log(typeof NaN); //number
console.log(10000000000*1000) 

let myNum = new Number(21)
let myBool = new Boolean(true)
console.log(myNum, myBool, typeof myNum, typeof myBool)
let result = myNum + myBool //Treats bool as number 0, 1
console.log(result, typeof result)

// Error
// let mynum = 21
// let mybool = true
// console.log(mynum + mybool, typeof(mynum+mybool))

let mynum = 21
let mybool = true
console.log(mynum + Number(mybool), typeof(mynum+ Number(mybool)))

