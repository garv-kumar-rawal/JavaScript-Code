const user = {
    username: "garv",
    logCount: 9, 
    loggedIn: true,

    getUserDetails: function(){
        // console.log("data fetch successfully form the database");
        console.log(`username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())

function User(username, loginCount, loggedIn){
    this.username = username
    this.loginCount = loginCount
    this.loggedIn = loggedIn

    return this
}

const userOne = new User("garv", 4, true)
const userTwo = new User("gk", 5,  false)

// console.log(userOne);
console.log(userOne.constructor);

// console.log(userTwo);


/* new : 
    1. create a new Object 
    2. construction function call by the new keyword 
    3. create new instance of the blueprint ( obeject - like copy the attributes and method of the constructor)
    4. then created the instnace */

