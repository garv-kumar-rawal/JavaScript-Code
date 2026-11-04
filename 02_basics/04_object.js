// const tinder = new Object()

const tinder = {}

tinder.id = "123abc"
tinder.user = "garv"
tinder.isLoggedIn = false

// console.log(tinder);

const regulerUser = {
    email: "garv@owner.com",
    fullname: {
        userFullName: {
            firstName: "garv",
            lastName: "rawal"
        }
    }
}

// console.log(regulerUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const  user = [
    {
        id: 1,
        email: "googel.com"
    },
    {
        id: 1,
        email: "googel.com"
    },
    {
        id: 1,
        email: "googel.com"
    }
]

user[1].email
// console.log(tinder);
// console.log((Object.keys(tinder)));
// console.log((Object.values(tinder)));
// console.log((Object.entries(tinder)));
// console.log((Object.keys(tinder))[1]);  // not a good practice but for testing it return the array

// console.log(tinder.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javaScript",
    price: "999",
    coureInstructor: "garv"
}

const {coureInstructor: instructor} = course

// console.log(coureInstructor);
console.log(instructor);

// {
//     "name": "garv",
//     "course": "javaScript",
//     "price": "free"
// }

[
    {},
    {}
]




