const { Console } = require('@woowacourse/mission-utils');
const controller = require('../controller/VendingController');

const VendingChangeException = require('../validate/VendingChangeException');
const VendingItemException = require('../validate/VendingItemException');

const { GAME_TEXT } = require('../utils/constants');
const { errorCheckFor } = require('../utils/errorCheckFor');

const InputView = {
  vaildate(exceptionInstance) {
    exceptionInstance.validate();
  },

  successReadChangeEvent(input) {
    this.vaildate(new VendingChangeException(input));
    controller.inputChange(input);

    this.readVendingItem();
  },

  readChangeEvent(input) {
    errorCheckFor(
      () => this.successReadChangeEvent(input),
      () => this.readVendingChange()
    );
  },

  readVendingChange() {
    Console.readLine(GAME_TEXT.change, (input) => {
      this.readChangeEvent(input);
    });
  },

  successReadVendingItemEvent(input) {
    this.vaildate(new VendingItemException(input));
    controller.inputChange(input);
  },

  readVendingItemEvent(input) {
    errorCheckFor(
      () => this.successReadVendingItemEvent(input),
      () => this.readVendingItem()
    );
  },

  readVendingItem() {
    Console.readLine(GAME_TEXT.item, (input) => {
      this.readVendingItemEvent(input);
    });
  },
};

module.exports = InputView;
