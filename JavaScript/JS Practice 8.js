/* JS CLASS 10 */

// Array methods
let names = ["Saif", "Ali", "Hammad", "Burhan"]
console.log(names[0], names.length)

// [] is used to access both arrays and objects and obj[-1] refers to the value of key -1
// Array.at() method
console.log(names.at(1), names.at(-1), names.at(5))
// Indexing gives undefined if out of bounds

// Join() method behaves like tostring() method, but in addition you can specify separator
let mystr = names.join(" ")
console.log(mystr, typeof mystr)

// Pop and push in the last of the array
names.pop()
console.log(names)
names.push("Farhan")
console.log(names)


// Shift , Remove first element
// Unshift , Put first element
names.shift()
names.shift()
console.log(names)
names.unshift("Bano")
names.unshift("Noor")
names.unshift("Fatima")
console.log(names)

// JS Array is a double ended queue

// Using delete leaves undefined wholes in the array
delete  names[0]
console.log(names)
names.unshift("Naina")
console.log(names)

names.shift()
names.shift()
console.log(names)

// concat returns new array
let arr2 = [1, 2, 3]
let arr3 = names.concat(arr2)
console.log(arr3)
let arr4 = [4,...arr3]
console.log(arr4)

// Splice method is used to add new items in an array
// We can add or remove elements from array
arr4.splice(2, 0, true, true)
console.log(arr4)

// Splice can remove elements without removing wholes in the array
arr4.splice(0, 1)
console.log(arr4)

// SLice can also be used to remove elements
// The slice() method slices out a piece of an array into a new array 
let arr5 = arr4.slice(0, 3)
console.log(arr5)
arr5 = arr4.slice(4)
console.log(arr5)
