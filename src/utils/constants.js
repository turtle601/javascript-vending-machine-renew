const REGEX = Object.freeze({
  divideTenNum: /^\d*0$/,
});

const ERROR_MESSAGE = Object.freeze({
  singleton: '[ERROR] 이 생성자 함수는 하나의 인스턴스만 생성 가능합니다.',
  vendingChangeInput: '[ERROR] 0으로 나눌 수 있는 숫자를 입력해주세요.',
});

const MODEL_KEY = Object.freeze({});

const GAME_TEXT = Object.freeze({});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
  GAME_TEXT,
};
