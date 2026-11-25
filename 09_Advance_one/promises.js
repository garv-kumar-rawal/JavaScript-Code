const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("async task is complate")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise is comsumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("task 2 is consumed")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "xyz", email: "xyz@example.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "xyz1", email: "xyz1@x.com"})
        } else{
            reject(`ERROR: something went wrong`)
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally( () => console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javaSript", email: "xyz1@x.com"})
        } else{
            reject(`ERROR: JS went wrong`)
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})