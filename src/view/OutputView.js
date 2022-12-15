const { Console } = require('@woowacourse/mission-utils');
const controller = require('../controller/VendingController');

const { GAME_TEXT } = require('../utils/constants');

const OutputView = {
  printChange() {
    Console.print(GAME_TEXT.informChange);
    const changeDic = controller.outputChange();

    [...Object.entries(changeDic).reverse()].forEach(([key, value]) => {
      Console.print(`${key} - ${value}개`);
    });
  },
};

module.exports = OutputView;
