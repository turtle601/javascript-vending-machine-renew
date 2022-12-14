const MissionUtils = require('@woowacourse/mission-utils');

const VendingRepository = require('../../src/repository/VendingRepository');
const VendingChange = require('../../src/service/domain/VendingChange');

const { MODEL_KEY } = require('../../src/utils/constants');
const { makeRandomCoin } = require('../../src/utils/makeRandomCoin');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('VendingChange 테스트', () => {
  test('잔돈이 제대로 저장되는지 확인 - 무작위 랜덤 함수', () => {
    const input = 450;
    const randoms = [100, 100, 100, 100, 50];
    mockRandoms(randoms);

    const repo = new VendingRepository();

    const vendingChange = new VendingChange({
      input: makeRandomCoin(input),
      repo: repo,
    });

    vendingChange.store();

    expect(repo.read(MODEL_KEY.change)).toEqual({
      500: 0,
      100: 4,
      50: 1,
      10: 0,
    });
  });
});
