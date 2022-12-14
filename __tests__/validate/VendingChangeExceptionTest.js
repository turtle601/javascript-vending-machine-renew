const VendingChangeException = require('../../src/validate/VendingChangeException');

describe('BaseBallInputException 입력값 테스트', () => {
  test.each([['130 '], ['111'], [' 1220']])(
    '(실패) 숫자 입력값 확인',
    (input) => {
      const vendingChangeException = new VendingChangeException(input);
      expect(() => vendingChangeException.validate()).toThrow('[ERROR]');
    }
  );

  test('(성공) 재시작/종료 입력값 확인', () => {
    const input = '1230';
    const vendingChangeException = new VendingChangeException(input);

    expect(() => vendingChangeException.validate()).not.toThrow();
  });
});
