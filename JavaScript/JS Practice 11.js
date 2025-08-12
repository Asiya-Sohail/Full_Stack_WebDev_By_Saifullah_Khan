// map, filter, foreach, reduce

// For each loop
arr = ["Saif", "Ali", "Imran", "Kamran"]

// arr.forEach((element, index, arr) => {
//     console.log(element, index, arr)
// });

// Map method
// It's just like foreach

// let newarr = arr.map((element, index, arr) => { //Removed thisval
//     console.log(element, index, arr)
// })

// console.log(newarr)

// W3School Example
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  let new_persons = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

//   console.log(new_persons)

// Filter Method
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not change the original array.

array = [1,2,3,4,5,6,7,8,9,10]

let new_array = array.filter((elem) => {
    return elem % 2 !== 0
})
let new_arr = arr.filter((elem) => {
    return elem.length === 4
})

console.log(new_array)
console.log(new_arr)


// Reduce method

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// Note
// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.

function getSum(total, num) {
    return total + Math.round(num);
}

const numbers = [15.5, 2.3, 1.1, 4.7];
console.log( numbers.reduce(getSum, 0))

// Keys method

// The keys() method returns an Iterator object with the keys of an array.
// The keys() method does not change the original array.



// Entries method

// The entries() method returns an Iterator object with the key/value pairs from an array:
// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]
// The entries() method does not change the original array.



// Every method
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.