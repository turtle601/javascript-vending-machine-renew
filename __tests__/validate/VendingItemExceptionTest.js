const VendingItemException = require('../../src/validate/VendingItemException');

describe('BaseBallInputException 입력값 테스트', () => {
  test.each([
    ['[콜라, 사이다, 100];[]'],
    ['[콜라, 1500, 1];[사이다: 1200, 2]'],
    [' 1220'],
  ])('(실패) 숫자 입력값 확인', (input) => {
    const vendingItemException = new VendingItemException(input);
    expect(() => vendingItemException.validate()).toThrow('[ERROR]');
  });

  test('(성공) 재시작/종료 입력값 확인', () => {
    const input = '[콜라,1500,20];[사이다,1000,10]';
    const vendingItemException = new VendingItemException(input);

    expect(() => vendingItemException.validate()).not.toThrow();
  });
});
