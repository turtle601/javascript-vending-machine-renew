const VendingRepository = require('../../src/repository/VendingRepository');
const VendingItem = require('../../src/service/domain/VendingItem');

const { MODEL_KEY } = require('../../src/utils/constants');

describe('VendingItem 테스트', () => {
  test('입력한 VendingItem이 제대로 저장되는지 확인', () => {
    const input = '[콜라,1500,20];[사이다,1000,10]';

    const repo = new VendingRepository();

    const vendingItem = new VendingItem({
      input,
      repo,
    });

    vendingItem.store();

    expect(repo.read(MODEL_KEY.item)).toEqual({
      콜라: { price: 1500, count: 20 },
      사이다: { price: 1000, count: 10 },
    });
  });
});
