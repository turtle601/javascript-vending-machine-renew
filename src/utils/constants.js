const REGEX = Object.freeze({
  divideTenNum: /^\d*0$/,
  item: /^\[[가-힣a-z]*,(\d*0),(\d*)\]$/,
});

const ERROR_MESSAGE = Object.freeze({
  singleton: '[ERROR] 이 생성자 함수는 하나의 인스턴스만 생성 가능합니다.',
  vendingChangeInput: '[ERROR] 0으로 나눌 수 있는 숫자를 입력해주세요.',
  vendingItemInput:
    '[ERROR] 상품명, 가격, 수량은 쉼표로, 개별 상품은 대괄호([])로 묶어 세미콜론(;)으로 구분합니다.',
});

const MODEL_KEY = Object.freeze({
  change: 'VENDING_CHANGE',
  item: 'VENDING_ITEM',
});

const GAME_TEXT = Object.freeze({});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
  GAME_TEXT,
};
