const { REGEX, ERROR_MESSAGE } = require('../utils/constants');

class VendingItemException {
  #input;

  constructor(input) {
    this.#input = input.split(';');
  }

  validate() {
    if (!this.#input.every((item) => REGEX.item.test(item))) {
      throw new Error(ERROR_MESSAGE.vendingItemInput);
    }
  }
}

module.exports = VendingItemException;
