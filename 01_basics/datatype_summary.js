// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id===anotherId)

const bigNumber = 13245871346489754561n
// console.log(typeof bigNumber)
// console.log(typeof id)
// Reference ( nonprimitive )

//  array, object, function

const heros = ["ironman", "captainAmerica", "thor"];
let myObj = {
    name: "garv",
    age: 20
}

const myFunction = function(){
    console.log("hello garv")
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// --------------------------------------------------------------

//  Stack (primitive), Heap (non-primitive)

let myName = "Garvkumar"
let anotherName = myName

anotherName = "mahesh"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "garv@googel.com",
    upi: "garv@ybl"
}

let userTwo = userOne

userTwo.email = "mahesh@IBN.com"

console.log(userOne.email)
console.log(userTwo.email)
