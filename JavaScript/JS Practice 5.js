/* JS CLASS 6 */
// Condition

let n1 = 8;
let n2 = 5;

if (n1 < n2) {
    console.log(`${n1} < ${n2}`)
}
else {
    console.log(`${n1} > ${n2}`)
}

// Object is different from 
// let user = {  } Object
// {   } Block 

let num = 4
let mytype = typeof num
if (mytype == "number"){
    console.log("Num is a number")
} else {
    console.log("Num is not a number")
}

let name_1 = ["saif", "ali"]
console.log(name_1, typeof name_1, name_1.length)
if (name_1.length == 0) {
    console.log("Array is Empty")
} else {
    console.log("Array isin't Empty")
}

