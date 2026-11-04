let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER", a);

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Garv"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "garv"
    if (username === "garv") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//  ************************** Interesting *****************

console.log(addone(5));

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
