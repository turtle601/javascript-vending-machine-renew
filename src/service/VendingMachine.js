const VendingRepository = require('../repository/VendingRepository');

class VendingService {
  #repo;

  constructor() {
    this.#repo = new VendingRepository();
  }
}

module.exports = VendingService;
