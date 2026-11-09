const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "javaScript"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    {
        languageName: "C",
        languageFileName: "c"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})
