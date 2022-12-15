const { MODEL_KEY } = require('../../utils/constants');

class VendingItem {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input.split(';');
    this.#repo = repo;
  }

  static getItemName(name) {
    return name.replace(/\[|\]/, '').trim();
  }

  static getItemPrice(price) {
    return +price;
  }

  static getItemCount(count) {
    return +count.replace(/\[|\]/, '').trim();
  }

  store() {
    const vendingItem = this.#input.reduce((acc, item) => {
      const itemList = item.split(',');
      return {
        ...acc,
        [VendingItem.getItemName(itemList[0])]: {
          price: VendingItem.getItemPrice(itemList[1]),
          count: VendingItem.getItemCount(itemList[2]),
        },
      };
    }, {});

    this.#repo.update(MODEL_KEY.item, vendingItem);
  }
}

module.exports = VendingItem;
