function getCardNumber() {
  const validationButton = document.getElementsByClassName('validate-btn')
  validationButton.addEventListener(e => {
    console.log('123')
    e.preventDefault()
    const cardNumber = document.getElementById('card-number').textContent.trim();
    const isValid = validateCardNumber(cardNumber);
    const paymentSystemIndex = getPaymentSystemIndex(cardNumber);
    displayValidationResult(isValid);
    displayPaymentSystem(paymentSystemIndex);
  })
}

function validateCardNumber(cardNumber) {
  return cardNumber.length >= 12 && cardNumber.length <= 19;
}

function getPaymentSystemIndex(cardNumber) {
  return cardNumber.charAt(0);
}

function displayValidationResult(isValid) {
  if (isValid) {
    alert('Карта прошла валидацию');
  } else {
    alert('Карта не прошла валидацию');
  }
}

function displayPaymentSystem(index) {
  const images = document.querySelectorAll('.payment-system img');
  images.forEach((image) => {
    image.classList.add('disabled');
  });

  switch (index) {
    case '2':
      images[0].classList.remove('disabled');
      alert('Ваша карта относится к платежной системе МИР');
      break;
    case '3':
      images[0].classList.remove('disabled');
      alert('Ваша карта относится к платежной системе American Express');
      break;
    case '4':
      images[0].classList.remove('disabled');
      alert('Ваша карта относится к платежной системе VISA');
      break;
    case '5':
      images[0].classList.remove('disabled');
      alert('Ваша карта относится к платежной системе Maestro');
      break;
    case '6':
      images[0].classList.remove('disabled');
      alert('Ваша карта относится к платежной системе MasterCard')
      break;

    default:
      images.classList.add('disabled')
      console.log('дефолт сценарий')
  }
}

function startValidation() {
  getCardNumber();
}
