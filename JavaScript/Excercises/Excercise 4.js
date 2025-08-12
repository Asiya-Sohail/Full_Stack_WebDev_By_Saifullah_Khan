//Exercise 4: Loops ✨

/*Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers*/

function sumOfN(n) {
  sum = 0
  for (let i=1; i<=n; i++){
    sum += i
  }
  return sum;
}

console.log(`Sum of first 10 natural numbers : ${sumOfN(10)}`)

/*Task 2: Multiplication Table
Write a function printMultiplicationTable(n) that returns the multiplication table for n. 
Values return in the array must be of the format 2 * 2 = 4*/

function printMultiplicationTable(n) {
  arr = []
  for (let i=1; i<=10; i++){
    arr.push(`${n} * ${i} = ${n * i}`)
  }
  return arr
}

console.log(printMultiplicationTable(12))

/*Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) 
in the given string str.*/


function countVowels(str) {
  vowels = "aeiouAEIOU"
  let count = 0
  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i])){
      count++;
    }
  }
  return count;
}

console.log(`${"hawai"} has ${countVowels("hawai")} vowels`)