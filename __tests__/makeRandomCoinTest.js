const MissionUtils = require('@woowacourse/mission-utils');

const { makeRandomCoin } = require('../src/utils/makeRandomCoin');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('makeRandom 테스트', () => {
  test('랜덤함수로 랜덤 거스름돈 있는지 확인', () => {
    const randoms = [100, 100, 100, 100, 50];

    mockRandoms(randoms);

    expect(makeRandomCoin(450)).toEqual([100, 100, 100, 100, 50]);
  });

  test('예외 - 500,100,50,10 이외의 수가 들어올 때', () => {
    const randoms = [100, 100, 1, 100, 100, 50];

    mockRandoms(randoms);

    expect(makeRandomCoin(450)).toEqual([100, 100, 100, 100, 50]);
  });
});
