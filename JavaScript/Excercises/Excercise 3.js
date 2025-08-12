//Exercise 3: Array and methods ✨
// Adding elements with high indexes can create undefined "holes" in an array

/*Arrays and Methods
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:*/

/*Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array*/

function filterNumbers(arr) {
  number_array = arr.filter((x) => {
    return typeof x === 'number'
  })
  
  return number_array;
}

mixed_array = ["Saif", 4, 9.5, true, null, 0, 12, undefined, "9"]
console.log(filterNumbers(mixed_array))

/*Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array*/

// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.


function reverseArray(arr) {
  arr.reverse()
  return arr;
}

console.log(reverseArray(mixed_array))

/*Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array*/

number_array = [3, 9, 25, 72, 14, 90, 34, 105]
max_num = -Infinity
function findMax(arr) {
  for (let i=0; i<arr.length; i++){
    if(arr[i] > max_num)
      max_num = arr[i]
  }
  return max_num;
}

console.log(`Maximum Number : ${findMax(number_array)}`)

/*Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed*/

array = ["a", "b", "r", "b", "s", "a", "v", "b", "c" , "c"]

function removeDuplicates(arr) {
  unique = new Set()
  for (let i=0; i<arr.length; i++) {
    if (!unique.has(arr[i]))
      unique.add(arr[i])
  }
  arr = []
  unique.forEach(element => {
    arr.push(element)
  });
  return arr;
}

console.log(removeDuplicates(array))

/*Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array*/

const myArr = [[1,2],[3,4],[5,6]];

function flattenArray(arr) {
  return arr.flat();
}

console.log(flattenArray(myArr))
