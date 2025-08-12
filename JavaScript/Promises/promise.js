// Promise is a special onject

// const p = new Promise((resolve, reject) => {
//   resolve({name: "Asiya"})
// })

// const p = new Promise((resolve, reject) => {
//   reject({name: "Asiya"})
// })

//  const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({name: "Asiya"})
//   }, 4000)
//  })

const resoleve_btn = document.querySelector('#resolve-btn')
const reject_btn = document.querySelector('#reject-btn')

 const p = new Promise((resolve, reject) => {
    // resolve('Promise Resolved')

  resoleve_btn.addEventListener("click" , () => {
    resolve('Promise Resolved')
  })
  reject_btn.addEventListener("click" , () => {
    reject("Promise Rejected")
  })
})


// Accepts callback function
// When we reject something so an error comes and we have to catch it
// Once the state of promise is fulfiled , we cannot resolve or reject it further (Means either we can resolve it or reject it)
// p.then((data) => {
//   // console.log('hiii');
//   console.log(data)
// }).catch((err) => {
//   // console.log('bye')
//   console.log(err)
// })


// Finally calls when the promise is settled
// .finally(()=> {
//   console.log("Finally!");
// })


// This is Asynchronous, Native object of browser
// setTimeout(() => {
//   console.log('hiii')
// }, 200)

// setTimeout(() => {
//   console.log('hiii')
// }, 0)

// microtask queue priority is more than callback queue
// If more than one promise than also all the promises will run first and then callback will run

// Settled means either reject or resolved not pending


// We return result from this .then
// const p2 = p.then((data) => {
//   console.log(data)
//   return 15
// })

// Second then has the data  which will be returned by first then
p.then((data) => {
  console.log(data)
  return 155
}).then((data) => {
  console.log(data)
  return "John"
}).then((data) => {
  console.log(data)
}).catch(err => {
  console.log(err)
  return "I'm returned by catch"
}).then((data) => {
  console.log(data)
  // console.log('objetc')
})

// catch also returns a promise