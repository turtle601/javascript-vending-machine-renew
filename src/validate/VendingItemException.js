const { REGEX, ERROR_MESSAGE } = require('../utils/constants');

class VendingItemException {
  #input;

  constructor(input) {
    this.#input = input.split(';');
  }

  #isCorrectFormat() {
    return this.#input.every((item) => REGEX.item.test(item));
  }

  #isPriceOverHundred() {
    return this.#input.every((item) => {
      const itemTest = item.split(',');
      return Number(itemTest[1]) >= 100;
    });
  }

  validate() {
    if (!(this.#isCorrectFormat() && this.#isPriceOverHundred())) {
      throw new Error(ERROR_MESSAGE.vendingItemInput);
    }
  }
}

module.exports = VendingItemException;
