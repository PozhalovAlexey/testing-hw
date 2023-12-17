describe('Виджет проверки номера карты', function () {
  let validateButton;
  let resultDiv;

  beforeEach(function () {
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

  it('должен проверять правильность ввода номера карты', function () {
    document.getElementById('card-number').value = '4111111111111111';
    validateButton.click();
    expect(resultDiv.textContent).toBe('Карта прошла валидацию');
  });

  it('должен проверять неправильный номер карты', function () {
    document.getElementById('card-number').value = '12';
    validateButton.click();
    expect(resultDiv.textContent).toBe('Карта не прошла валидацию');
  });

  it('должен отображать платежную систему для определенного номера карты', function () {
    document.getElementById('card-number').value = '4111111111111111';
    validateButton.click();
    expect(resultDiv.textContent).toBe('Ваша карта относится к платежной системе VISA');
  });

});
