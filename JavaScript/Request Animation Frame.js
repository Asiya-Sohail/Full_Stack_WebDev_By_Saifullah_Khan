// console.log("Before");


// for (let i = 0; i<100000; i++) {
//   console.log("Hello ", i);
  
// }

// console.log("After");



// function recursion(num) {
//   if (num === 1000000){
//     return;
//   }
//   num = num + 1;
//   console.log("Hello", num);
  
//   // recursion(num++)
//   recursion(num)
// }

// recursion(0)


// let num = 0
// setInterval(() => {
//   if (num === 10000){
//     return;
//   }
//   console.log("Hello", num);
//   num = num + 1;

// }, 0)

let num = 0
function animation () {
  console.log(num);
  num = num + 1

  requestAnimationFrame(animation)
  
}
animation()