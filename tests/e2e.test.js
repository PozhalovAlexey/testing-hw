const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/9000'});
global.window = dom.window;
global.document = dom.window.document;

describe('Виджет проверки номера карты', () => {
  let validateButton;
  let resultDiv;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="card-widget">
        <div class="payment-system">
          <img src="/icons/mastercard.png" alt="mastercard" id="mastercard">
          <img src="/icons/visa.png" alt="visa" id="visa">
          <img src="/icons/mir.png" alt="mir" id="mir">
          <img src="/icons/maestro.png" alt="maestro" id="maestro">
          <img src="/icons/amex.png" alt="amex" id="amex">
        </div>
        <div class="input-Container">
          <label for="card-number"></label>
          <input type="text" id="card-number" placeholder="Введите номер карты">
          <button class="validate-btn">Проверить</button>
        </div>
        <div id="result"></div>
      </div>
    `;

    validateButton = document.querySelector('.validate-btn');
    resultDiv = document.getElementById('result');
  });

  it('должен проверять правильность ввода номера карты', () => {
    document.getElementById('card-number').value = '4111111111111111';
    validateButton.click();
    setTimeout(() => {
      expect(resultDiv.textContent).toBe('Карта прошла валидацию');
    }, 100)
  });

  it('должен проверять неправильный номер карты', () => {
    document.getElementById('card-number').value = '12';
    validateButton.click();
    setTimeout(() => {
      expect(resultDiv.textContent).toBe('Карта не прошла валидацию');
    })
  });

  it('должен отображать платежную систему для определенного номера карты', () => {
    document.getElementById('card-number').value = '4111111111111111';
    validateButton.click();
    setTimeout(() => {
      expect(resultDiv.textContent).toBe('Ваша карта относится к платежной системе VISA');
    })
  });
});
