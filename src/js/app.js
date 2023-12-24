import validateCardNumber from './validation'

document.querySelector('.validate-btn').addEventListener('click', e => {
  e.preventDefault()
  const cardNumber = document.getElementById('card-number').value
  if (validateCardNumber(cardNumber)) {
    getPaymentSystemIndex(cardNumber);
    displayPaymentSystem(cardNumber);
  } else {
    alert('Неправильный номер карты')
  }
})
document.querySelector('.reset-btn').addEventListener('reset', (e) => {
  e.preventDefault()
  document.form[0].reset()
  console.log('restart')
})

function getPaymentSystemIndex(cardNumber) {
  return cardNumber.charAt(0);
}

