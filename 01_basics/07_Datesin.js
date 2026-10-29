//  Date

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());       // impoetant date method where we and modified the date format
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());

// let mycCreatedDate = new Date(2026, 0, 26)
// let mycCreatedDate = new Date(2026, 0, 26, 5, 3)
// let mycCreatedDate = new Date("2026-10-29")
let mycCreatedDate = new Date("10-29-2026")

// console.log(mycCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday: "long", 
    //timeZone: "Asia/kolkata"  // you can use this after study 
}));




