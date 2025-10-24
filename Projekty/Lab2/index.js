// // const wait = 3000;
// // console.log("Początek skryptu...");

// setTimeout(function() {
//     console.log("Upłynęły minimum 3 sek...");
// }, wait);

// console.log("Koniec skryptu...");

const fs = require("fs");
const data = fs.readFileSync('package.json');

console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");
