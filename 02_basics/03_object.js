//  singletom
// Object.create()

// Objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Garv",
    "full name": "garv rawal",
    [mySym]: "mykey1",
    age: 20,
    location: "jaipur",
    email: "garv@google.com",
    isLoggedIn: false,
    lastLoggin: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "garv@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "garv@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

