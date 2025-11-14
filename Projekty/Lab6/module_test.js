// module_test.js – użycie dwóch modułów: exports i klasy

console.log("=== Wersja 1: exports (currency1) ===");

const currency1 = require('./currency1');

console.log("50 USD →", currency1.usdToPln(50), "PLN");
console.log("20 EUR →", currency1.eurToPln(20), "PLN");
console.log("15 GBP →", currency1.gbpToPln(15), "PLN");
console.log("25 CAD →", currency1.cadToPln(25), "PLN");
console.log("10 CHF →", currency1.chfToPln(10), "PLN");

console.log("\n=== Wersja 2: klasa (currency2) ===");

const Currency = require('./currency2');
const currency2 = new Currency();

console.log("50 USD →", currency2.usd(50), "PLN");
console.log("20 EUR →", currency2.eur(20), "PLN");
console.log("15 GBP →", currency2.gbp(15), "PLN");
console.log("25 CAD →", currency2.cad(25), "PLN");
console.log("10 CHF →", currency2.chf(10), "PLN");
