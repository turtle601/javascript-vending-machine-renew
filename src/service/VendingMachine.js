const VendingRepository = require('../repository/VendingRepository');

const VendingChange = require('./domain/VendingChange');
const VendingItem = require('./domain/VendingItem');

const { makeRandomCoin } = require('../utils/makeRandomCoin');
const { MODEL_KEY } = require('../utils/constants');

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

  getChange() {
    return this.#repo.read(MODEL_KEY.change);
  }
}

module.exports = VendingMachine;
