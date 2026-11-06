//  Immediately Invoked Functioon Expressions

(function chai(){
    // name IIFE
    console.log(`DB connected`);
})();   // terminat the IIFE function to run the next function uding ";".

( (name) => {
    // Unname IIFE
    console.log(`DB CONNETED TWO ${name}`);
})('Garv')

