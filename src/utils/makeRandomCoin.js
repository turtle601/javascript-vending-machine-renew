const { Random } = require('@woowacourse/mission-utils');

const changeDic = [500, 100, 50, 10];

const makeRandomCoin = (money) => {
  const result = [];
  while (money > 0) {
    const randomChange = Random.pickNumberInRange(10, 500);
    if (changeDic.includes(randomChange)) {
      money -= randomChange;
      result.push(randomChange);
    }
  }
  return result;
};

module.exports = {
  makeRandomCoin,
};
