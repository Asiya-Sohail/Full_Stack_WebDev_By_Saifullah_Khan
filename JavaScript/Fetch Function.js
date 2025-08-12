let mydata = fetch("https://jsonplaceholder.typicode.com/todos/1")
// console.log(mydata)
mydata.then((val) => {
    // console.log(val)
    data = val.json()
    // console.log(data)
    data.then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })
}).catch((err) => {
    console.log(err)
})

let mydata_2 = fetch('https://jsonplaceholder.typicode.com/posts/1')

mydata_2.then((data) => {
    let json_data = data.json()

    json_data.then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err)
})