const marval_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][0]);

// const all_heros = marval_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marval_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [5, 6], 7, [6, 7, [3, 5, 4]]]

const real_another_array = another_array.flat(Infinity)  // you can give the depth of the array instead of infinity

console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));  // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


