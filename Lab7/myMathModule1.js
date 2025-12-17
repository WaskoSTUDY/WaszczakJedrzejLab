// myMathModule1.js
// Moduł matematyczny – wersja export

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => b !== 0 ? a / b : 'Error: divide by zero';
exports.power = (a, b) => Math.pow(a, b);
