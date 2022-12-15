const VendingRepository = require('../repository/VendingRepository');

const VendingChange = require('./domain/VendingChange');
const VendingItem = require('./domain/VendingItem');

const { makeRandomCoin } = require('../utils/makeRandomCoin');

class VendingMachine {
  #repo;

  constructor() {
    this.#repo = new VendingRepository();
  }

  putChange(change) {
    const vendingChange = new VendingChange({
      input: makeRandomCoin(change),
      repo: this.#repo,
    });

    vendingChange.store();
  }

  putItem(item) {
    const vendingItem = new VendingItem({
      input: item,
      repo: this.#repo,
    });

    vendingItem.store();
  }
}

module.exports = VendingMachine;
