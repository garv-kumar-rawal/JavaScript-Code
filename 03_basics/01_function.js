function sayMyName(){
    console.log("g");
    console.log("a");
    console.log("r");
    console.log("v");
}

// sayMyName()

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(4, 2)

// console.log("Result :", result);

function loginUserMessage(username = "mahesh"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
console.log(loginUserMessage("Garv"));
