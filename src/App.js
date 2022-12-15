const InputView = require('./view/InputView');

class App {
  play() {
    InputView.readVendingChange();

    return this;
  }
}

const app = new App();
app.play();

module.exports = App;
