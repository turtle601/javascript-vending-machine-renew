const { MODEL_KEY } = require('../../utils/constants');

class VendingChange {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  store() {
    const result = this.#input.reduce(
      (acc, change) => {
        return { ...acc, [change]: acc[change] + 1 };
      },
      { 500: 0, 100: 0, 50: 0, 10: 0 }
    );

    this.#repo.update(MODEL_KEY.change, result);
  }
}

module.exports = VendingChange;
