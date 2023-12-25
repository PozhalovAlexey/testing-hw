import validateCardNumber from './validation'
import displayPaymentSystem from "./paymentSystem";

document.querySelector('.validate-btn').addEventListener('click', e => {
  e.preventDefault()
  const cardNumber = document.getElementById('card-number').value
  if (validateCardNumber(cardNumber)) {
    const paymentIndex = getPaymentSystemIndex(cardNumber)
    displayPaymentSystem(paymentIndex)
  } else {
    alert('Неправильный номер карты')
  }
})
document.querySelector('.reset-btn').addEventListener('reset', (e) => {
  e.preventDefault();
  console.log('restart');
  location.reload();
  return false

})
function getPaymentSystemIndex(cardNumber) {
  return cardNumber.charAt(0);
}

