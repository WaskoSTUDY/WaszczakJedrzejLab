// currency2.js – moduł obiektowy (klasa)

class Currency {
  constructor() {
    // Kursy walut zapisane w obiekcie instancji
    this.rates = {
      USD: 4.0,
      EUR: 4.4,
      GBP: 5.0,
      CAD: 3.0,
      CHF: 4.6
    };
  }

  toPLN(amount, currency) {
    const rate = this.rates[currency];
    if (!rate) throw new Error(`Nieznana waluta: ${currency}`);
    return amount * rate;
  }

  usd(amount) { return this.toPLN(amount, "USD"); }
  eur(amount) { return this.toPLN(amount, "EUR"); }
  gbp(amount) { return this.toPLN(amount, "GBP"); }
  cad(amount) { return this.toPLN(amount, "CAD"); }
  chf(amount) { return this.toPLN(amount, "CHF"); }
}

module.exports = Currency;
