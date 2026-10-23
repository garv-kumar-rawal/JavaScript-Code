const name = 'garv'
const value = 3

// console.log(name + value + "value")

console.log(`my name is ${name} and my repo count is ${value}.`)

const gameName = new String("sudoku-game-changer")

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("d"))

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-4, -1)
console.log(anotherString);

const newStringOne = "      garvkumar    "
console.log(newStringOne);
console.log(newStringOne.trim());

url = "https://garv.com/garv%20kumar"

console.log(url.replace("%20", "-"))

console.log(url.includes("garv"));

console.log(gameName.split("-"));






