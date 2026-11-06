const user = {
    username: "garv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coffe(){
//     let username = "garv"
//     console.log(this.username)
// }

// coffe()

// Arrow function --
const coffee = () => {
    let username = "garv"
    console.log(this)
}

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }   // explicit return 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)    // most use in react , this colled the implicit return 

const addTwo = (num1, num2) => ({usernmae : "garv"}) 

console.log(addTwo(4, 5));


