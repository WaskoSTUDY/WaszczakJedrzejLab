// module_test.js
const readline = require("readline");

const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Wybierz moduł:");
console.log("1 - moduł export");
console.log("2 - moduł obiektowy");

rl.question("Twój wybór (1/2): ", function (choice) {
    rl.question("Podaj pierwszą liczbę: ", function (num1) {
        rl.question("Podaj drugą liczbę: ", function (num2) {

            const a = parseFloat(num1);
            const b = parseFloat(num2);

            if (choice === "1") {
                console.log("\n--- Wyniki (math1) ---");
                console.log("Dodawanie:", math1.add(a, b));
                console.log("Odejmowanie:", math1.subtract(a, b));
                console.log("Mnożenie:", math1.multiply(a, b));
                console.log("Dzielenie:", math1.divide(a, b));
                console.log("Potęgowanie:", math1.power(a, b));

            } else {
                console.log("\n--- Wyniki (math2) ---");
                console.log("Dodawanie:", math2.add(a, b));
                console.log("Odejmowanie:", math2.subtract(a, b));
                console.log("Mnożenie:", math2.multiply(a, b));
                console.log("Dzielenie:", math2.divide(a, b));
                console.log("Potęgowanie:", math2.power(a, b));
            }

            rl.close();
        });
    });
});

rl.on("close", () => {
    console.log("\nDziękuję! Kończę działanie programu.");
    process.exit(0);
});
