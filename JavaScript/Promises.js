 // Promises 

// The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

// MDN
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.


let iphone_promise = new Promise((resolve, reject) => {
    let iphone = true
    if (iphone == true)
        resolve("Yeah I got an Iphone")
    reject("Papa said, Focus on Studies")
})

iphone_promise.then((val) => {
    console.log(val)
}).catch((val) => {
    console.log(val)
}).finally(() => {
    console.log("This has to run")
})

// 