const VendingMachine = require('../service/VendingMachine');

const { ERROR_MESSAGE } = require('../utils/constants');

let instance = null;

class VendingController {
  #service;

  constructor() {
    if (instance) {
      throw new Error(ERROR_MESSAGE.singleton);
    }

    instance = this;

    this.#service = new VendingMachine();
  }

  inputChange(change) {
    this.#service.putChange(+change);
  }

  inputItem(item) {
    this.#service.putItem(item);
  }
}

module.exports = Object.freeze(new VendingController());
