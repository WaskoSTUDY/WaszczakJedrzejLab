// currency1.js – moduł poprzez exports (prosty obiekt)

// Kursy walut do PLN (przykładowe)
const rates = {
  USD: 4.0,
  EUR: 4.4,
  GBP: 5.0,
  CAD: 3.0,
  CHF: 4.6
};

// Funkcja ogólna
exports.toPLN = function(amount, currency) {
  const rate = rates[currency];
  if (!rate) throw new Error(`Nieznana waluta: ${currency}`);
  return amount * rate;
};

// Funkcje pojedyncze
exports.usdToPln = (amount) => amount * rates.USD;
exports.eurToPln = (amount) => amount * rates.EUR;
exports.gbpToPln = (amount) => amount * rates.GBP;
exports.cadToPln = (amount) => amount * rates.CAD;
exports.chfToPln = (amount) => amount * rates.CHF;
