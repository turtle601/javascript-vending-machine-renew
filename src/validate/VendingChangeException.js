const { REGEX, ERROR_MESSAGE } = require('../utils/constants');

class VendingChangeException {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    if (!REGEX.divideTenNum.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.vendingChangeInput);
    }
  }
}

module.exports = VendingChangeException;
